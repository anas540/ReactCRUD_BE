const mongoose = require('mongoose')
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: String,
    password:String
  });
const User = mongoose.model("User",UserSchema)
module.exports = User