'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Contacts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      where: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      build: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      occupation: {
        type: Sequelize.STRING
      },
      hair: {
        type: Sequelize.STRING
      },
      complexion: {
        type: Sequelize.STRING
      },
      clothing: {
        type: Sequelize.TEXT
      },
      personality: {
        type: Sequelize.TEXT
      },
      notes: {
        type: Sequelize.TEXT
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Contacts');
  }
};