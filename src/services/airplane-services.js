const { StatusCodes } = require('http-status-codes');

const AirplaneRepository = require("../repositories/airplane-repository");
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

module.exports = {
  createAirplane
};
