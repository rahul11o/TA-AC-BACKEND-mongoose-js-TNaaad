let express = require("express");
let mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/blog");

mongoose.connection.once("connected", () => {
  console.log("connected to mongoDB");
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});

let app = express();

app.use(express.json());

app.listen(2000, () => {
  console.log("server listening on port  20000");
});
