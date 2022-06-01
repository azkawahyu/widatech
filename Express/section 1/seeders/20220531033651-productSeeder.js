"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Products",
      [
        {
          itemName: "Frying Pan",
          quantity: 250,
          totalCost: 15000000,
          totalSold: 350000,
        },
        {
          itemName: "Mug",
          quantity: 100,
          totalCost: 300000,
          totalSold: 40000,
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
