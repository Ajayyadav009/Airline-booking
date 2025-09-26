const { Logger } = require("../config");
const AppError = require("../utils/errors/app.error");
const StatusCodes = require('http-status-codes');


class CrudRepository {
  constructor(model) {
    this.model = model;
  }
async create(data) {
 
    if (data.capacity) data.capacity = Number(data.capacity); // convert string to number
    const response = await this.model.create(data);

}


  async destroy(id) {
   
      const response = await this.model.destroy({ where: { id } });
      return response;
   
  }

  async get(id) {

      const response = await this.model.findByPk(id);
      if(!response){
         throw new AppError('Not able to find the resource', StatusCodes.NOT_FOUND);
      }
      return response;
    
  }

  async getAll(filter = {}) {
   
      const response = await this.model.findAll({ where: filter });
      return response;
   
  }

  async update(id, data) {
   
      const response = await this.model.update(data, { where: { id } });
      return response;
  
  }
}

module.exports = CrudRepository;
