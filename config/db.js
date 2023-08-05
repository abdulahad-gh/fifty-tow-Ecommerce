const mongoose = require('mongoose')
const { mongodbUri } = require('../secret')

const connectDb = async (options={})=>{
  try {
    await mongoose.connect(mongodbUri,options)
    console.log('database connection successfully.');

        mongoose.connection.on('error',(error)=>{
        console.error('db connection error',error);
    })

  } catch (error) {
    console.error('Could not connect to database',error.toString())
  }

}

module.exports = connectDb;