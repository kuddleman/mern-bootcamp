const express = require('express')
const router = express.Router()

const { getCategoryById, createCategory } = require('../controllers/category')
const { isAuthenticated, isSignedIn, isAdmin } = require('../controllers/auth')
const { getUserById } = require('../controllers/user')
const { isEqualWith } = require('lodash')

// params
router.param('userId', getUserById)
router.param('categoryId', getCategoryById)


// actual routers go here

//  :userId is included to validate user ( does he have permission to create categories? )
router.post(
  '/category/create/:userId', 
  isSignedIn, 
  isAuthenticated, 
  isAdmin, 
  createCategory 
)

module.exports = router