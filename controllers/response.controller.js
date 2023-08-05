const successResponse = (res,{statusCode=200,message='success',payload={}}) => {
    return res.status(statusCode).json({
        success:true,
        message,
        payload
    })
}

const errorResponse = (res,{statusCode=500,message='internal error'})=>{
    return res.status(statusCode).json({
        success:false,
        message
    })
}


module.exports = {
    successResponse,
    errorResponse
}