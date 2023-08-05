const userService =  require('../services/user.service')

//get all users
exports.getAllUsers = async(req,res,next)=>{
    try {
        const users  = await userService.getAllUsers()

        res.status(200).json({
            status:true,
            message:'successfully get all users',
            data:users
        })
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