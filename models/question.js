'use strict';
module.exports = (sequelize, DataTypes) => {
  var Question = sequelize.define('Question', {
    // id: {
    //   allowNull: false,
    //   autoIncrement: true,
    //   primaryKey: true,
    //   type: Sequelize.INTEGER
    //  },
    type: DataTypes.STRING,
    title: DataTypes.STRING,
    contactCol: DataTypes.STRING 
  },{});

  Question.associate = function(models) {
    // associations can be defined here
  };
  return Question;
};