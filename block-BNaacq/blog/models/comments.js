let mongoose = require("mongoose");

let articleSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    tags: [String],
    author: mongoose.Schema.Types.ObjectId,
    comments: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Article", articleSchema);
