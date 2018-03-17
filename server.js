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
// functions for handling sessions
const sessionHandlers = require("./lib/sessionHandlers.js")(knex);
const auth = require("./lib/auth.js")(dataHelpers, sessionHandlers);

// Twilio Credentials
const client = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);
const text = require("./lib/smsHelpers.js")(client);


app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const server = express()
  // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static("public"))
  .listen(PORT, "0.0.0.0", "localhost", () => console.log(`Listening on ${PORT}`));

// Create the WebSockets server
const wss = new SocketServer({ server });


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
      auth.registration(msg, ws).then((result) => {
        // if the registration was successful, login the user
        if (result) {
          auth.login(msg, ws);
        }
      })
      break;
    case 'login':
      // LOGIN: Upon user login
      auth.login(msg, ws);
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
                        text.messageTimer('fiveMinWarning', to_number, text.sendSMSMessage);
                        // create timeout for charge finished warning sms message                      
                        text.messageTimer('chargeFinished', to_number, text.sendSMSMessage);                      
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


