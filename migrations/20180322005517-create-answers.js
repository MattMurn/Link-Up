'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Answers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      }
        });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Answers');
  }
};