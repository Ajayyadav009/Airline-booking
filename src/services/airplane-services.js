const AirplaneRepository = require("../repositories/airplane-repository");
const airplaneRepository = new AirplaneRepository(); // instantiate the class

async function createAirplane(data) {
  try {
    const airplane = await airplaneRepository.create(data);
    return airplane;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createAirplane
};
