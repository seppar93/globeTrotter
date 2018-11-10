const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, unique: false, required: false },
    message: { type: String, unique: false, required: false },
    created: {type: Date, default: Date.now}
});

const User = mongoose.model("User", userSchema);

module.exports = User;