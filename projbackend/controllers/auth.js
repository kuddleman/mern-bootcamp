const User = require('../models/user')
const { check, validationResult } = require('express-validator')

exports.signup = ( req, res ) => {
  const errors = validationResult( req )

  if( !errors.isEmpty()) {
    return res.status( 422 ).json({
      error: errors.array()[0].msg
    })
  }

  // save the user
  const user = new User( req.body )
  // we can use mongoose methods, eg. save
  // save method give us back 2 objects: error and the user we entered
  user.save(( err, user ) => {
    if ( err ) {
      return res.status( 400 ).json({
        err: "NOT able to save user in DB"
      })
    }
    res.json({
      name: user.name,
      email: user.email,
      id: user._id
    })
  })
}


exports.signout = ( req, res ) => {
  res.json({
    message: "User signout",
  })
}