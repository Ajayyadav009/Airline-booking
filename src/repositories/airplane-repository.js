const CrudRepository = require("./crud-repository");
 const {airplain } = require("../models");
 class AirplaneRepository extends CrudRepository{
     constructor(){
  super(airplain);

     }
 }

  module.exports = AirplaneRepository;
