const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: 32,
    trim: true
  },
  lastname: {
    type: String,
    maxLength: 32,
    trim: true
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true
  },
  password: {
    type: String,
    trim: true
  },
  userinfo: {
    stype: String,
    trim: true
  },
  password: {
    type: String,
    trim: true
  },
  salt: String,
  role: {
    type: Number,
    default: 0
  },
  purchases: {
    type: Array,
    default: []
  }
})

module.exports = mongoose.model('User', userSchema)