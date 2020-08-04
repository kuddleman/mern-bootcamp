const express = require('express')
const router = express.Router()

const { 
  getCategoryById, 
  createCategory, 
  getCategory, 
  getAllCategories,
  updateCategory,
  removeCategory  
} = require('../controllers/category')

const { isAuthenticated, isSignedIn, isAdmin } = require('../controllers/auth')
const { getUserById } = require('../controllers/user')


// params
router.param('userId', getUserById)
router.param('categoryId', getCategoryById)


// actual routers go here
  //  :userId is included to validate user ( does he have permission to create categories? )
  //create category
router.post(
  '/category/create/:userId', 
  isSignedIn, 
  isAuthenticated, 
  isAdmin, 
  createCategory 
)

//read category
router.get('/category/:categoryId', getCategory)
router.get('/categories', getAllCategories)

//update category
router.put(
  '/category/:categoryId/:userId', 
  isSignedIn, 
  isAuthenticated, 
  isAdmin, 
  updateCategory 
)


//delete category
router.delete(
  '/category/:categoryId/:userId', 
  isSignedIn, 
  isAuthenticated, 
  isAdmin, 
  removeCategory 
)


module.exports = router