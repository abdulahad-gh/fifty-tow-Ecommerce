const userService =  require('../services/user.service')
const { successResponse } = require('./response.controller')

//get all users
exports.getAllUsers = async(req,res,next)=>{
    try {
        const {search='',page=1,limit=5} = req.query
        const searchRegEx =new RegExp('.*' + search + '.*','i')
        const filter = {
            $or:[
                {name:{$regex:searchRegEx}},
                {phoneNumber:{$regex:searchRegEx}},
                {email:{$regex:searchRegEx}}
            
            ]
        }
        const options = {
            password:0
        }

        //pagination
        const pagination = {
            skip:Number(page-1) * Number(limit),
            limit:Number(limit),
            page
        }
        const users  = await userService.getAllUsers(filter,pagination,options)

       return successResponse(res,{statusCode:200,message:'successfully get all users',payload:users})
    } catch (error) {
        res.status(404).json({
            status:false,
            error:error.message
        })
    }
}

//singupUser
exports.singupUser = async(req,res,next)=>{
    try {
        const userSignupInfo = req.body;
        const users  = await userService.singupUser(userSignupInfo)

        res.status(200).json({
            status:true,
            message:'successfully create a  user',
            data:users
        })
    } catch (error) {
        res.status(404).json({
            status:false,
            error:error.message
        })
    }
}