"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Invoices",
      [
        {
          invoiceNo: 12,
          date: "12-5-2022",
          customerName: "Pablo",
          salesPersonName: "John",
          paymentType: "CASH",
          notes: "Example Notes",
          listOfProductSold: "Example List Product",
        },
        {
          invoiceNo: 12,
          date: "13-5-2022",
          customerName: "Robin",
          salesPersonName: "Jack",
          paymentType: "CREDIT",
          notes: "Example Notes",
          listOfProductSold: "Example List Product",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
