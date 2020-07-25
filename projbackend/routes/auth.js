//use express router:


const express = require('express')
const router = express.Router()
const { check } = require('express-validator')
const { signout, signup } = require('../controllers/auth')

router.post("/signup",[
  check( 'name' )
  .isLength({ min: 3 }).withMessage('must be at least 3 characters long'),
  check( 'email' )
  .isEmail(),
  check( 'password' )
  .isLength({ min: 5 }).withMessage('must be at least 5 characters long')
], signup)

router.get("/signout", signout ) 

module.exports = router