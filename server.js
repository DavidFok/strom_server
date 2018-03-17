require("dotenv").config();
const WebSocket = require("ws");
const SocketServer = require("ws").Server;
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const PORT = process.env.PORT || 3001;

//USE FOR LOCAL ENVIRONMENT
const ENV = process.env.ENV || "development";
//USE FOR HEROKU
// const ENV = process.env.NODE_ENV || 'development';

const knexConfig = require("./knexfile");
const knex = require("knex")(knexConfig[ENV]);
const morgan = require("morgan");
const knexLogger = require("knex-logger");
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
  .listen(PORT, "0.0.0.0", "localhost", () => console.log(`Listening on ${PORT}`));

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

// calls the sendSMSMessage function at the appropriate time
const messageTimer = (messageType, phone_number, cb) => {
  let timeTill;
  let message;
  switch (messageType) {
    case 'fiveMinWarning':
      timeTill = 5000;
      // timeTill = 25 * 60 * 1000;
      message = 'There are five minutes left in your charge session!';
      break;
    case 'chargeFinished':
      timeTill = 10000;
      // timeTill = 30 * 60 * 1000;
      message = "Your charge session is over!";
      break;
  }
  setTimeout(() => {
    cb(message, phone_number);
  }, timeTill);
};

// sends out text message
const sendSMSMessage = (message, phone_number) => {
  const to_number = `+1${phone_number}`;
  client.messages
    .create({
      to: to_number,
      from: process.env.TWILIO_NUMBER,
      body: message
    })
    .then(message => console.log(message.sid));
}




  

// if (secondDiff === 300) {
//   // if there are 5 minutes left, send out a text message indicating this
//   client.messages
//   .create({
//     to: '+16479882942',
//     from: '+16476997492',
//     body: 'There are five minutes left in your charge session!'
//   })
//   .then(message => console.log(message.sid));
// }

// if (secondDiff === 0) {
//   client.messages
//   .create({
//     to: '+16479882942',
//     from: '+16476997492',
//     body: 'Your charge session has now ended!'
//   })
//   .then(message => console.log(message.sid));
// }

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
        ws.send(JSON.stringify({ route: "registerData", type: "err", data: "user exists" }));
        return false;
      } else {
        // if the user is not yet registered
        console.log("registering data");
        // register user in database
        return dataHelpers.registerUser(msg.data);
      }

    }).then((result) => {
      // send out session token and user information to the client
      if (result !== false) {
        // if the registration was successful
        ws.send(JSON.stringify({ route: "registerData", type: "confirm", data: "registration successful" }));
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
      if (check === false) {
        // if the user is in the database
        console.log("found user in database");
        if (dataHelpers.checkUserPassword(msg.data.password, user.password_digest)) {
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
            ws.send(JSON.stringify({ route: 'loginData', type: "confirm", data: data }));
            sessionHandlers.displaySessions();
          });
        } else {
          // if the password entered is incorrect
          console.log("password incorrect!");
          ws.send(JSON.stringify({ route: 'loginData', type: "err", data: "password incorrect" }));
        }
      } else {
        // if the user is not in the database
        console.log("user is not in the database");
        ws.send(JSON.stringify({ route: 'loginData', type: 'err', data: 'user not found' }));
      }
    });
};

wss.on("connection", (ws, req) => {
  ws.on("error", () => console.log("errored"));
  console.log('Client connected');

  // On connection: send parkade data
  let promiseResult = dataHelpers.serveParkadeData();
  promiseResult.then((rows) => {
    let sendData = { route: "parkadeData", data: rows }
    ws.send(JSON.stringify(sendData));

    // dummy send to test live update on map || it works!!!!!
    setTimeout(function () {
      rows[0].occupied_regular = 4;
      sendData = { route: "parkadeData", data: rows }
      ws.send(JSON.stringify(sendData));
    }, 5000);
  });


ws.on('message', (message) => {
  // when message is received from client
  let msg = JSON.parse(message);
  switch (msg.type) {
    case 'register':
      // REGISTRATION: Upon user registration
      registration(msg, ws, login).then((result) => {
        // if the registration was successful, login the user
        if (result) {
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
            ws.send(JSON.stringify({ route: "session", type: "reject", data: "please login to begin a charging session" }))
          } else {
            dataHelpers.checkForSpot(msg.data)
              .then((res) => {
                let outMsgVcle = {
                  route: "session",
                  type: res[0],
                  data: res[1]  // a note for the client
                }
                if (res[0] === "confirm") {
                  dataHelpers.createSession(result.userId, msg.data)
                    .then(() => {
                      console.log("result user id ==== ", result.userId);        
                      // send out new session confirmation to client side
                      dataHelpers.findPhoneNumberOfUser(result.userId).then((result) => {
                        console.log("phone number array: ", result[0].phone_number);
                        const to_number = result[0].phone_number;
                        // create timeout for 5 min warning sms message
                        messageTimer('fiveMinWarning', to_number, sendSMSMessage);
                        // create timeout for charge finished warning sms message                      
                        messageTimer('chargeFinished', to_number, sendSMSMessage);                      
                      });
                      ws.send(JSON.stringify(outMsgVcle));
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
    } // end switch
  }); 

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});


