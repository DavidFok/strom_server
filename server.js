// server.js
require("dotenv").config();

const WebSocket = require("ws");
const SocketServer = require("ws").Server;

const PORT        = process.env.PORT || 3001;

//USE FOR LOCAL ENVIRONMENT
const ENV         = process.env.ENV || "development";

//USE FOR HEROKU
// const ENV = process.env.NODE_ENV || 'development';

const express     = require("express");
const bodyParser  = require("body-parser");
const app         = express();

const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const morgan      = require("morgan");
const knexLogger  = require("knex-logger");

let parkades;

function display(result){
  parkades = result;
}

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
  var promiseresult = dataHelpers.serveParkadeData();
  promiseresult.then((rows) => {
    console.log(rows);
    let sendData = {type: "parkadeData", data: rows}
    ws.send(JSON.stringify(sendData));
    
    //dummy send to test live update on map || it works!!!!!
    // setTimeout(function() {
    //   rows[0].occupied_regular = 4;
    //   sendData = {type: "parkadeData", data: rows}
    //   ws.send(JSON.stringify(sendData));
    // }, 5000);
  });

  // ws.on("close", () => {
  //   console.log("Client disconnected");
  // });
});

