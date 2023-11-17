let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let articleSchema = new Schema({
  title: String,
  description: String,
});

module.exports = mongoose.model("Article", articleSchema);
