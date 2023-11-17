let express = require("express");
let mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/");

let app = express();

app.listen(5000, () => {
  console.log("server listening to port 5000");
});
