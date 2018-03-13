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

const dataHelpers = require("./lib/dataHelpers.js")(knex);

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const server = express()
  // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static("public"))
  .listen(PORT, "0.0.0.0", "localhost", () => console.log(`Listening on ${ PORT }`));



// Create the WebSockets server
const wss = new SocketServer({ server });

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
  let promiseresult = dataHelpers.serveParkadeData();
  promiseresult.then((rows) => {
    let sendData = {route: "parkadeData", data: rows}
    ws.send(JSON.stringify(sendData));
    
    // dummy send to test live update on map || it works!!!!!
    // setTimeout(function() {
    //   rows[0].occupied_regular = 4;
    //   sendData = {type: "parkadeData", data: rows}
    //   ws.send(JSON.stringify(sendData));
    // }, 5000);
  });

  // receiving data from the client/user
  ws.on('message', (message) => {
    let msg = JSON.parse(message);
    switch (msg.type) {
      case 'register':
        dataHelpers.retrieveUser(msg.data.email)
          .then((result) => {
            return dataHelpers.checkForUser(result);
          })
          .then((x) => {
            if (x === false) {
              console.log("user not registered");
              ws.send(JSON.stringify({route: "registerData", type: "err", data: "user exists"}));
            } else {
              console.log("registering data");
              dataHelpers.registerUser(msg.data);
              ws.send(JSON.stringify({route: "registerData", type: "confirm", data: "registered"}));
            }
          });
        break;
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

