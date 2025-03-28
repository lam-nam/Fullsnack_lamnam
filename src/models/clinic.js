"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Clinic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Clinic.init(
    {
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      description: DataTypes.TEXT,
      image: DataTypes.STRING,
    },

    {
      sequelize,
      modelName: "Clinic",
    }
  );
  return Clinic;
};

// you can comprehend that files in models (except index.js) is a define for tables in database
