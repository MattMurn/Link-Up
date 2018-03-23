'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Questions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
       },
       createdAt: Sequelize.DATE,
       updatedAt: Sequelize.DATE
      // type: {
      //   type: Sequelize.STRING
      // },
      // title: {
      //   type: Sequelize.STRING
      // },
      // contactCol: {
      //   type: Sequelize.STRING
      // }
      // createdAt: {
      //   allowNull: true,
      //   type: Sequelize.DATE,
      //   default: Sequelize.NOW()
      // },
      // updatedAt: {
      //   allowNull: true,
      //   type: Sequelize.DATE,
      //   default: Sequelize.NOW()
      // }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Questions');
  }
};