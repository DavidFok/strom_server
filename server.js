require("dotenv").config();
const WebSocket   = require("ws");
const SocketServer= require("ws").Server;
const express     = require("express");
const bodyParser  = require("body-parser");
const app         = express();

const PORT        = process.env.PORT || 3001;

//USE FOR LOCAL ENVIRONMENT
const ENV         = process.env.ENV || "development";
//USE FOR HEROKU
// const ENV = process.env.NODE_ENV || 'development';

const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const morgan      = require("morgan");
const knexLogger  = require("knex-logger");
const moment = require('moment');

const dataHelpers = require("./lib/dataHelpers.js")(knex);
const time_tick = 1000;

// Twilio Credentials
const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

// array of active user sessions
// functions for handling sessions
const sessionHandlers = require("./lib/sessionHandlers.js")(knex);

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const server = express()
  // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static("public"))
  .listen(PORT, "0.0.0.0", "localhost", () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });

// keeps track of end times for charging sessions
const sessionEndTimes = []; 
// load session end times from database into memory
dataHelpers.loadSessionEndTimes().then((sessions) => {
  sessions.forEach((session, index) => {
    sessionEndTimes.push(session);
  });
});

console.log("session end times: ", sessionEndTimes);

// broadcast function
wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
};


wss.on("connection", (ws, req) => {
  ws.on("error", () => console.log("errored"));
  console.log('Client connected');

  // On connection: send parkade data
  let promiseResult = dataHelpers.serveParkadeData();
  promiseResult.then((rows) => {
    let sendData = {route: "parkadeData", data: rows}
    ws.send(JSON.stringify(sendData));
    
    // dummy send to test live update on map || it works!!!!!
    setTimeout(function() {
      rows[0].occupied_regular = 4;
      sendData = {route: "parkadeData", data: rows}
      ws.send(JSON.stringify(sendData));
    }, 5000);
  });

  // checks active charging sessions to see how much time is left for each
  const checkMemoryForTimeOuts = ((sessionEndTimes) => {
    // const currentTime = Date.now();
    // const start = moment(currentTime, "HH:mm:ss");
    sessionEndTimes.forEach((session, index) => {
      const start = moment.utc();
      const endTime = moment(session.charge_end);
      const minuteDiff = endTime.diff(start, 'minutes');
      const secondDiff = endTime.diff(start, 'seconds');
      
      if (secondDiff === 300) {
        // if there are 5 minutes left, send out a text message indicating this
        client.messages
        .create({
          to: '+16479882942',
          from: '+16476997492',
          body: 'There are five minutes left in your charge session!'
        })
        .then(message => console.log(message.sid));
      }

      console.log(`Time Left: ${minuteDiff}:${secondDiff % 60}`);
    });
  });

  // calls checkMemoryForTimeOuts every time tick interval (1 second)
  setInterval(() => {
    checkMemoryForTimeOuts(sessionEndTimes);
  }, time_tick);

  // registration function
  const registration = (msg, ws, callback) => {
    return dataHelpers.retrieveUser(msg.data.email)
    .then((result) => {
      return dataHelpers.checkForUser(result);
    })
    .then((result) => {
      let check = result[0];
      let user = result[1][0];
      if (check === false) {
        // if the user is already registered
        console.log("user is already registered");
        ws.send(JSON.stringify({route: "registerData", type: "err", data: "user exists"}));
        return false;
      } else {
        // if the user is not yet registered
        console.log("registering data");
        // register user in database
        return dataHelpers.registerUser(msg.data);
      }
      
    }).then((result) => {
        // send out session token and user information to the client
        if (result !== false){
          // if the registration was successful
          ws.send(JSON.stringify({route: "registerData", type: "confirm", data: "registration successful"}));
          return true;
        } else {
          // if the registration was not successful
          return false;
        }
      });
  };

  // login function
  const login = (msg, ws) => {
    // query database for user by email
    console.log('login requested!');
    dataHelpers.retrieveUser(msg.data.email)
      .then((result) => {
        return dataHelpers.checkForUser(result);
      })
      .then((result) => {
        let check = result[0];
        let user = result[1][0];
        if (check === false){
          // if the user is in the database
          console.log("found user in database");
          if (dataHelpers.checkUserPassword(msg.data.password, user.password_digest)){
            // if the password entered is correct
            console.log("password correct!");
            console.log("user.id: ", user.id);
            // create a session for the user
            let token = sessionHandlers.createSession(user.id);
            let data = {
              session_token: token,
              user: user
            };
            token.then(() => {
              ws.send(JSON.stringify({route: 'loginData', type: "confirm", data: data}));
              sessionHandlers.displaySessions();
            });
          } else {
            // if the password entered is incorrect
            console.log("password incorrect!");
            ws.send(JSON.stringify({route: 'loginData', type: "err", data: "password incorrect"}));
          }
        } else {
        // if the user is not in the database
        console.log("user is not in the database");
        ws.send(JSON.stringify({route: 'loginData', type: 'err', data: 'user not found'}));
        }
      });           
  };

  ws.on('message', (message) => {
    // when message is received from client
    let msg = JSON.parse(message);
    switch (msg.type) {
      case 'register':
        // REGISTRATION: Upon user registration
        registration(msg, ws, login).then((result) => {
          // if the registration was successful, login the user
          if(result){
            login(msg, ws);
          }
        })
        break;
      case 'login':
        // LOGIN: Upon user login
        login(msg, ws);
        break;
      case 'spots':
        console.log('parking spots requested');
        dataHelpers.getSpots(msg.data)
          .then((result) => {
            let outMsgVcle = {
              route: "spots",
              type: "confirm",
              data: result  //result is an arry of parking_spot objects
            }
            ws.send(JSON.stringify(outMsgVcle));
          })
        break;
      case 'logout':
        console.log("message data: ", msg.data);
        console.log("type of message data", typeof msg.data);
        if (msg.data !== "null") {
          sessionHandlers.deleteToken(msg.data);
        }
        break;
      case 'session request':
        sessionHandlers.handshake(msg.cookie)
          .then((result) => {
            console.log("handshake returned: ", result);
            if (!result) {
              ws.send(JSON.stringify({route: "session", type: "reject", data: "please login to begin a charging session"}))
            } else {
              dataHelpers.checkForSpot(msg.data)
                .then((res) => {
                  let outMsgVcle = {
                    route: "session",
                    type: res[0],
                    data: res[1]  // a note for the client
                  }
                  if(res[0] === "confirm") {
                    dataHelpers.createSession(result.userId, msg.data)
                      .then(() => {
                        // send out new session confirmation to client side
                        ws.send(JSON.stringify(outMsgVcle));
                        // update list of active session termination times in memory
                        start = moment();
                        // create a new session record in memory
                        let newSession = {
                          user_id: result.userId,
                          charge_end: start.add(30, 'minutes')
                        };
                        sessionEndTimes.push(newSession);
                        console.log("session end times: ", sessionEndTimes.charge_end);
                      });
                  } else {
                    ws.send(JSON.stringify(outMsgVcle));
                  }
                });
            }
          })
        break;
      case 'session token':
          sessionHandlers.handshake(msg.cookie)
            .then((result) => {
              console.log("handshake returned: ", result);
              let outMsgVcle = {
                route: "session token",
                type: "reject",
                data: null
              };
              if (result !== false) {
                // if the session has been found
                outMsgVcle.type = "confirm";
              }

              ws.send(JSON.stringify(outMsgVcle));

            });
        // CONNECTION: UPON user connection
        console.log('session_token received from client: ', msg.data);
    }
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});


// ======================= TEST CODE ======================= \\

// let checkForUserTest = dataHelpers.checkForUser("bla@bla.bla");
// checkForUserTest.then((rows) =>{
//   console.log(rows)
// });


// let insertUser = dataHelpers.registerUser({
//   first_name: 'Tony',
//   last_name: 'Ha',
//   student_id: 54321,
//   password_digest: 54321,
//   email: 'tony@ha.ha',
//   handicap: false,
//   street_line_1: "128 W Cordova St",
//   street_line_2: "#300",
//   city: "Vancouver",
//   province: "BC",
//   postal_code: "V6B1G8",
//   country: "Canada"
// });
// insertUser.then((result) => {
//   console.log(result)
// });


// let insertUser = new Promise(function (resolve, reject) {
//   resolve(false);
// });
// insertUser.then((result) => {
//   console.log(result)
// })

