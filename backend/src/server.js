const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const { posts } = require("./endpoints");
const { authenticate } = require("./middleware");
const app = express();
const run = "test";
//parse application/x-www-from-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
//parse aplication/json
app.use(bodyParser.json());

//injeccion de dependencias
const postsHandlers = posts({ axios });
app.post("/", authenticate, postsHandlers.post);

if (run === "dev") {
  console.log("entro en produccion");
  app.listen(3001, function() {
    console.log("Example app listening on port 3001!");
  });
}

module.exports = app;
