const mongoose = require('mongoose')

const User = new mongoose.Schema({
  email: String,
  username: String,
  password: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('User', User)