const express = require('express')

// Controller Functions
const {signupUser, loginUser, getUsers, getUser} = require('../controllers/userController')

const router  = express.Router()

// login route
router.post('/login', loginUser)

//signup route
router.post('/signup', signupUser)

// Get All Users
router.get('/', getUsers)

// Delete a User by email
router.get('/:email', getUser)

module.exports = router
