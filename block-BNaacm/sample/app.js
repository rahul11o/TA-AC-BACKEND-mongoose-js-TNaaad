let express = require("express");
let mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/sample");

let app = express();

app.listen(4000, () => {
  console.log("server is listening to port 4000");
});
