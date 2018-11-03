const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  user_firstName: { type: String, required: true },
  user_lastName: { type: String, required: true },
  user_age: { type: Number, required: true },
  user_location: { type: String, required: true },
  user_budget: { type: Number, required: true },
  user_dates: { type: Date},
  dates: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

module.exports = User;