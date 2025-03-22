"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Allcode extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Allcode.init(
    {
      key: DataTypes.STRING,
      type: DataTypes.STRING,
      valueVi: DataTypes.STRING,
      valueEn: DataTypes.STRING,
    },

    {
      sequelize,
      modelName: "Allcode",
    }
  );
  return Allcode;
};

// you can comprehend that files in models (except index.js) is a define for tables in database
