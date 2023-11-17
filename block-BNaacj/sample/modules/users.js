let mongoose = require("mongoose");

let Schema = mongoose.Schema;

// let userSchema = new Schema({
//   name: String,
//   email: { type: String, lowercase: true },
//   age: { type: Number, dafault: 0 },
//   favourites: [String],
//   marks: [Number],
// });

let userSchema = new Schema({
  name: String,
  email: { type: String, lowercase: true },
  age: { type: Number, dafault: 0 },
  favourites: [String],
  marks: [Number],
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlenght: 15,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});
