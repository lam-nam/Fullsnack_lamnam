"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  History.init(
    {
      patientId: DataTypes.INTEGER,
      docterId: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      files: DataTypes.TEXT,
    },

    {
      sequelize,
      modelName: "History",
    }
  );
  return History;
};

// you can comprehend that files in models (except index.js) is a define for tables in database
