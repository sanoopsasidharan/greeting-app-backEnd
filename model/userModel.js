const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    lowercase: true,
  },
  number: {
    type: Number,
    required: true,
    length: 10,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  place: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("user", userSchema);
module.exports = User;
