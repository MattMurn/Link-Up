module.exports = function(sequelize, DataTypes){
    var Answers = sequelize.define("Answers", {
        
        type: DataTypes.STRING,
        text: DataTypes.STRING,
        contactCol: DataTypes.STRING,
        questionId: DataTypes.INTEGER
    });
    // Answers.associate = function(models){
    //     Answers.belongsTo(models.Questions, {foreignKey: 'questionId'});
    //     // adds groupId column to contacts.  
    // };
    return Answers;
};
