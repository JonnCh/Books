'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('StudentBooks', [{
      studentId: 1,
      bookId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      studentId: 1,
      bookId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      studentId: 2,
      bookId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('StudentBooks', null, {});
  }
};
