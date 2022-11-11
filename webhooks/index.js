const express = require("express");
const bodyParser = require("body-parser");
const { response } = require("express");

const app = express();
const PORT = 3100;

app.use(bodyParser.json());

app.listen(PORT, () => console.log(`Running on port ${PORT}`));

app.get("/hello", (request, response) => {
  console.log(request.body);
  response.send("hi!");
});

app.post("/webhook", (request, response) => {
  console.log(request.body);

  response.send("You send a post request ");
});
