"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Invoice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Invoice.init(
    {
      invoiceNo: DataTypes.INTEGER,
      date: DataTypes.DATE,
      customerName: DataTypes.STRING,
      salesPersonName: DataTypes.STRING,
      paymentType: DataTypes.ENUM(["CASH", "CREDIT"]),
      notes: DataTypes.STRING,
      listOfProductSold: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Invoice",
    }
  );
  return Invoice;
};
