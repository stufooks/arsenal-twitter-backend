const mongoose = require('./connection')

const Post = new mongoose.Schema({
  author: String,
  content: String,
  createAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Post', Post)