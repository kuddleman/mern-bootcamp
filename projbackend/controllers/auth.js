const User = require('../models/user')

exports.signup = ( req, res ) => {
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
    res.json( user )
  })
}


exports.signout = ( req, res ) => {
  res.json({
    message: "User signout",
  })
}