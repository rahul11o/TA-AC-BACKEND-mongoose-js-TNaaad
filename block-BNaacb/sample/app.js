let express = require("express");
let mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/sample");

let app = express();

app.listen(4000, () => {
  console.log("server listening t port 4000");
});
