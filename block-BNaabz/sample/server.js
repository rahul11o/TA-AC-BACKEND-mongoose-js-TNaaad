let express = require("express");
let mongoose = require("mongoose");
let logger = require("morgan");

mongoose.connect("mongodb://localhost:27017/mydatabase");

let app = express();

app.listen(3000, () => {
  console.log("server liatening on port 30000");
});
