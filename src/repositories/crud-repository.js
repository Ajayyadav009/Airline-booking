const { Logger } = require("../config");

class CrudRepository {
  constructor(model) {
    this.model = model;
  }
async create(data) {
  try {
    if (data.capacity) data.capacity = Number(data.capacity); // convert string to number
    const response = await this.model.create(data);
    return response;
  } catch (error) {
    Logger.error("Something went wrong in the Crud repo: create", error);
    throw error;
  }
}


  async destroy(id) {
    try {
      const response = await this.model.destroy({ where: { id } });
      return response;
    } catch (error) {
      Logger.error("Something went wrong in the Crud repo: destroy");
      throw error;
    }
  }

  async get(id) {
    try {
      const response = await this.model.findByPk(id);
      return response;
    } catch (error) {
      Logger.error("Something went wrong in the Crud repo: get");
      throw error;
    }
  }

  async getAll(filter = {}) {
    try {
      const response = await this.model.findAll({ where: filter });
      return response;
    } catch (error) {
      Logger.error("Something went wrong in the Crud repo: getAll");
      throw error;
    }
  }

  async update(id, data) {
    try {
      const response = await this.model.update(data, { where: { id } });
      return response;
    } catch (error) {
      Logger.error("Something went wrong in the Crud repo: update");
      throw error;
    }
  }
}

module.exports = CrudRepository;
