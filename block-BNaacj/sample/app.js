let express = require("express");
let mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/sample");

let app = express();

app.listen(7654, () => {
  console.log("server is listenint to port 7654");
});
