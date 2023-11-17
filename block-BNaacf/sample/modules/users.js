let mongoose = require("mongoose");

let Schema = mongoose.Schema;

// let userSchema = new Schema({
//   name: String,
//   email: { type: String, lowercase: true },
//   age: { type: Number, dafault: 0 },
// });

let userSchema = new Schema({
  name: String,
  email: { type: String, lowercase: true },
  age: { type: Number, dafault: 0 },
  favourites: [String],
  marks: [Number],
  adsress: {
    village: String,
    city: String,
    state: String,
    pin: Number,
    user: Schema.Types.ObjectId,
  },
});
