const data = require("../data");
const User = require("../models/User");

//seed service for deleteMany and insertMany
const  userSeed = async()=>{
    //before delete all documents from user collection.
    await User.deleteMany({})
    
    //Insert many documents in user collection.
    const result = await User.insertMany(data.users)
    return result
}

module.exports = userSeed;