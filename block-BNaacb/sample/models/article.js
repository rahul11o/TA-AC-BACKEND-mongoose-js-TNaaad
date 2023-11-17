let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let articleSchema = new Schema({
  article: String,
  length: Number,
});
