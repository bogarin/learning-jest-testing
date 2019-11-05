const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const { posts } = require("./endpoints");
const { authenticate } = require("./middleware");
const app = express();

//parse application/x-www-from-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
//parse aplication/json
app.use(bodyParser.json());

//injeccion de dependencias
const postsHandlers = users({ axios });
app.post("/", authenticate, postsHandlers.post);

app.listen(3001, function() {
  console.log("Example app listening on port 3001!");
});
