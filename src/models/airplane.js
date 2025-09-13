'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Airplane extends Model {
    static associate(models) {
      // Example association
      // Airplane.hasMany(models.Flight, { foreignKey: 'airplaneId' });
    }
  }

  Airplane.init(
    {
      modelNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Airplane',
      // freezeTableName: true, // Uncomment if you don't want Sequelize to pluralize
    }
  );

  return Airplane;
};
