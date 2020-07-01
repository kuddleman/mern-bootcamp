const mongoose = require('mongoose')
const crypto = require('crypto')
const { v1: uuidv1 } = require('uuid');


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

userSchema.virtual("password")
  .set(function(password){
     this._password = password
     this.salt = uuidv1
     this.encry_password = this.securePassword(password)
  })
  .get()

// create methods:
userSchema.method = {
  //get secure password: pass a plain password and return an encypted password
  securePassword: function(plainpassword) {
    if ( !password ) return ""
    try {
        return crypto.createHmac('sha256', this.salt)
        .update(plainpassword)
        .digest('hex');
    } catch (err) {
        return ""
    }
  }
}

module.exports = mongoose.model('User', userSchema)
