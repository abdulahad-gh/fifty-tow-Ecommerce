const app = require("./app");
const connectDb = require("./config/db");
const { serverPort } = require("./secret");
require('dotenv').config()


app.listen(serverPort,async()=>{
    console.log(`your server is running at ${serverPort}`);
   await connectDb()
})