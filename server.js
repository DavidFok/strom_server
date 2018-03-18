require("dotenv").config();
const WebSocket = require("ws");
const SocketServer = require("ws").Server;
const express = require("express");
const bodyParser = require("body-parser");
const app = express();


// PORT MANAGEMENT
const PORT = process.env.PORT || 3001;
//USE FOR LOCAL ENVIRONMENT
const ENV = process.env.ENV || "development";
//USE FOR HEROKU
// const ENV = process.env.NODE_ENV || 'development';


// TWILIO CREDENTIALS AND HELPERS
const client = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);
const twilioNumber = process.env.TWILIO_NUMBER;
const text = require("./lib/smsHelpers.js")(client, twilioNumber);


// DB MANAGEMENT HELPERS
const knexConfig = require("./knexfile");
const knex = require("knex")(knexConfig[ENV]);
const morgan = require("morgan");
const knexLogger = require("knex-logger");
const dataHelpers = require("./lib/dataHelpers.js")(knex);


// SESSION TOKEN HANDLERS
const sessionHandlers = require("./lib/sessionHandlers.js")(knex);
const auth = require("./lib/auth.js")(dataHelpers, sessionHandlers);


// PARKING SESSION HANDLERS
const parkingHandler = require("./lib/parkingHandler.js")(sessionHandlers, dataHelpers, text);


app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));



// DIRECT SERVER TO SERVE STATIC ASSETS (HTML, JS, CSS) FROM /PUBLIC FOLDER
const server = express()
  .use(express.static("public"))
  .listen(PORT, "0.0.0.0", "localhost", () => console.log(`Listening on ${PORT}`));



// =============================================================================
// ========================= CREATE WEBSOCKETS SERVER ==========================
// =============================================================================

const wss = new SocketServer({ server });


// BROADCAST FUNCTION
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

  // ON CONNECTION: SEND PARKADE DATA
  let promiseResult = dataHelpers.serveParkadeData();
  promiseResult.then((rows) => {
    let sendData = { route: "parkadeData", data: rows }
    ws.send(JSON.stringify(sendData));

    // ********  DUMMY DATA DISPLAYING LIVE UPDATE ON MAP ***********
    setTimeout(function () {
      rows[0].occupied_regular = 4;
      sendData = { route: "parkadeData", data: rows }
      ws.send(JSON.stringify(sendData));
    }, 5000);
    // ******************** END DUMMY DATA *************************
  });


  ws.on('message', (message) => {
    // parse all messages from client
    let msg = JSON.parse(message);
    switch (msg.type) {

      // ------------------- REGISTRATION -------------------

      case 'register':
        auth.registration(msg, ws).then((result) => {
          // if the registration was successful, login the user
          if (result) {
            auth.login(msg, ws);
          }
        })
        break;

      // --------------------- LOGIN ------------------------

      case 'login':
        auth.login(msg, ws);
        break;

      // --------------------- LOGOUT -----------------------  

      case 'logout':
        console.log("message data: ", msg.data);
        if (msg.data !== "null") {
          sessionHandlers.deleteToken(msg.data);
        }
        break;

      // ---------------- PARKING SESSION -------------------

      case 'session request':
          parkingHandler.initiateParkingSession(ws, msg);
        break;

      // --------------- SESSION TOKEN API ------------------

      case 'session token':
        console.log("message in session token switch case: ", msg);
        // upon user connection
        console.log('session_token received from client: ', msg.cookie);

        sessionHandlers.handshake(msg.cookie)
        .then((result) => {
          console.log("handshake returned: ", result);

          let outMsgVcle = {
            route: "session token",
            type: "reject",
            data: null
          };

          // if the session has been found
          if (result !== false) {
            outMsgVcle.type = "confirm";
            outMsgVcle.data = { sessionData: result.session }; 
          };
          
          ws.send(JSON.stringify(outMsgVcle));
        });
        break;

      // ----------- PARKING SPOT DATA REQUEST API ----------

      case 'spots':
        console.log('parking spots requested');
        dataHelpers.getSpots(msg.data)
          .then((result) => {
            let outMsgVcle = {
              route: "spots",
              type: "confirm",
              data: result  //result: array of parking_spot objects
            }
            ws.send(JSON.stringify(outMsgVcle));
          })
    }

    // ===================== END SWITCH CASES =====================

  }); 


  ws.on("close", () => {
    console.log("Client disconnected");
  });


});

// =============================================================================
// ========================= END WEBSOCKETS SERVER =============================
// =============================================================================