  const { StatusCodes } = require('http-status-codes');

  
 const info = (_req, res) =>{
    return res.status(StatusCodes.OK).json({
        Sucess:true,

        msg: "api is live",
        error:{},
        data: {}
    })
 }
module.exports ={
 info
} 