const { Logger } = require("../config");

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
