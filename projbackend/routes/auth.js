//use express router:


const express = require('express')
const router = express.Router()
const { check } = require('express-validator')
const { signout, signup, signin, isSignedIn } = require('../controllers/auth')

router.post(
  "/signup",
  [
    check( 'name' )
    .isLength({ min: 3 }).withMessage('name must be at least 3 letters long'),
    check( 'email' )
    .isEmail().withMessage('email must be formatted correctly'),
    check( 'password' )
    .isLength({ min: 5 }).withMessage('password must be at least 5 characters long')
  ], 
  signup
)
router.post(
  "/signin",
  [
    check( 'email' )
    .isEmail().withMessage('email must be formatted correctly'),
    check( 'password' )
    .isLength({ min: 1 }).withMessage('password field is required')
  ], 
  signin
)

router.get("/signout", signout ) 

router.get('/testroute', isSignedIn, ( req, res ) => {
  res.send('This is a protected route')
 })

module.exports = router