"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Invoices", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      invoiceNo: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      date: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      customerName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      salesPersonName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      paymentType: {
        allowNull: false,
        type: Sequelize.ENUM(["CASH", "CREDIT"]),
      },
      notes: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      listOfProductSold: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Invoices");
  },
};
