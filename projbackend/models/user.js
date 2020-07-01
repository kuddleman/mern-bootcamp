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
  encry_password: {
    type: String,
    required: true
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

// create methods:

userSchema.method = {
  //get secure password: pass a plain password and return an encypted password
  securePassword: function(plain) {
    if ( !password ) return ""
    try {

    } catch (err) {
        return ""
    }
  }
}

module.exports = mongoose.model('User', userSchema)
