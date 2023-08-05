const User = require("../models/User");

//getAllUsers
exports.getAllUsers=async()=>{
    return await User.find({})
}

//singupUser
exports.singupUser=async(userSignupInfo)=>{
    console.log(userSignupInfo);
    return await User.create(userSignupInfo)
}