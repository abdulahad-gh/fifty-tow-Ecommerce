const express = require('express')
const route  = express.Router()
const userController = require('../controllers/user.controller')

route.post('/signup',userController.singupUser)

route.get('/',userController.getAllUsers)




module.exports = route