const PORT        = process.env.PORT || 8080;

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

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});