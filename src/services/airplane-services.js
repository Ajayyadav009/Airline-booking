const { StatusCodes } = require('http-status-codes');

const AirplaneRepository = require("../repositories/airplane-repository");
const AppError = require('../utils/errors/app.error');
const { error } = require('../utils/common/error-response');
const airplaneRepository = new AirplaneRepository(); // instantiate the class

async function createAirplane(data) {
  try {
    const airplane = await airplaneRepository.create(data);
    return airplane;
  } catch (error) {
  if(error.name == "SequelizeValidationError"){
     let explanation = [];
    error.errors.array.forEach((err) => {
      explanation.push(err.message);
    });
    console.log(explanation);

    throw new AppError(explanation, StatusCodes.BAD_REQUEST);

  }
  throw new AppError('Cannot create a new airplane object', StatusCodes.INTERNAL_SERVER_ERROR);
  
  }
}

async function getAirplanes() {
  try{
    const  airplanes  = await airplaneRepository.getAll();
   return airplanes;

  }
  catch(err){
    throw new AppError('Cannot fetch data from all the airplanes', StatusCodes.INTERNAL_SERVER_ERROR);
  }
  
}


 async function getAirplane(id) {
    try{
    const  airplane = await airplaneRepository.get(id);
    
   return airplane;

  }
  catch(err){
    if(error.StatusCodes == StatusCodes.NOT_FOUND){
       throw new AppError("The airplanr you requested is not present ", error.StatusCodes);
       
    }
    throw new AppError('Cannot fetch data from all the airplanes', StatusCodes.INTERNAL_SERVER_ERROR);
  }
  
 }

module.exports = {
  createAirplane,
  getAirplanes,
  getAirplane
};
