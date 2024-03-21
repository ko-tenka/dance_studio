"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Secure extends Model {
    static associate(models) {}
  }
  Secure.init(
    {
      pass: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Secure",
    }
  );
  return Secure;
};
