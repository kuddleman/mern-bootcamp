const express = require('express')
const router = express.Router()

const { getUserById } = require('../controllers/user')
const {} = require('../controllers/auth')

router.param('userID', getUserById)

module.exports = router

