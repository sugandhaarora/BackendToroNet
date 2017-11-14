const mongoose = require('mongoose'),
      Schema = mongoose.Schema

var Post = new Schema({
  user: {
    type: String,
  },
  title: {
    type: String,
    trim: true
  },
  body: {
    type: String,
    trim: true
  },
  createdOn:{
    type: Date
  }
})

module.exports = mongoose.model('Post', Post)
