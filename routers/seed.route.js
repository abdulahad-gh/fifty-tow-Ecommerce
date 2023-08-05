const express = require('express')
const seedRoute = express.Router()
const seedController =  require('../controllers/seed.controller')


seedRoute.get('/users',seedController.userSeed)

module.exports = seedRoute;