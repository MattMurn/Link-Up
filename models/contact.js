'use strict';
module.exports = (sequelize, DataTypes) => {
  var Contact = sequelize.define('Contact', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    where: DataTypes.STRING,
    age: DataTypes.INTEGER,
    build: DataTypes.STRING,
    gender: DataTypes.STRING,
    occupation: DataTypes.STRING,
    hair: DataTypes.STRING,
    complexion: DataTypes.STRING, 
    clothing: DataTypes.TEXT,
    personality: DataTypes.TEXT,
    notes: DataTypes.TEXT
  }, {});
  // Contact.associate = function(models) {
  //   Contact.belongsTo(models.Group, {foreignKey: 'groupId', targetKey: 'category'});
  //   // associations can be defined here
  // };
  return Contact;
};