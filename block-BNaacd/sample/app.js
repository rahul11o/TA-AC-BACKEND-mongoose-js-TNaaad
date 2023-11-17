let express = require("express");
let mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/sample");

let app = express();

app.listen(4567, () => {
  console.log("server listening on port 4567");
});
