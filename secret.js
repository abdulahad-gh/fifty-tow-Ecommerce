require('dotenv').config()

const serverPort = process.env.SERVER_PORT || 3002;
const mongodbUri = process.env.MONGODB_ATLAS_URL || 'mongodb://127.0.0.1:27017/fifty-two-e-commerce-db' 
console.log(process.env.SERVER_PORT);

module.exports = {
    serverPort,
    mongodbUri
}