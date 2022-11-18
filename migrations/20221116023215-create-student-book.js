'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('StudentBooks', {
      studentId: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Students', key: 'id' }
      },
      bookId: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Books', key: 'id' }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('StudentBooks');
  }
};