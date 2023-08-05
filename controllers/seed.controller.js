const seedService  = require('../services/seed.service')

//seed cntroller for deleteMany and insertMany
const userSeed  = async(req,res,next)=>{
    try {
    const users  = await seedService.userSeed()
    res.status(200).json({
        status:true,
        message:'delete all users, and insert many users',
        data:users
    })
        
    } catch (error) {
        next(error)
    }
}