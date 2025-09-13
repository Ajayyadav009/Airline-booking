const CrudRepository = require("./crud-repository");
const { Airplane } = require("../models");  // ✅ Correct name + capital A

class AirplaneRepository extends CrudRepository {
  constructor() {
    super(Airplane); // ✅ Pass the actual model
  }
}

module.exports = AirplaneRepository;
