const express = require('express')
const app = express()
const createError = require('http-errors')
const morgan = require('morgan')
require('dotenv').config()

const rateLimit = require('express-rate-limit')
const userRoute = require('./routers/user.route')
const root = '/api/v1/'



const limiter = rateLimit({
    windosMs:1 * 60 *1000,
    max:500,
    message:"too many reqest, please try again later!"
})


//middlewares
app.use(express.json())
app.use(limiter)
app.use(morgan('dev'))
app.use(`${root}user`,userRoute)




app.get('/',(req,res)=>{
    res.send('your fify-tow-e-commerce webapp is running')
})
//client error handle
app.use((req,res,next)=>{
    next(createError(404,'route not found'))
})

//server side error handling
app.use((err,req,res,next)=>{
    return res.status(err.status||500).json({
        status:false,
        message:err.message
    })
})


//

module.exports = app;