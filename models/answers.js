module.exports = function(sequelize, DataTypes){
    var Answers = sequelize.define("Answers", {
        
        type: DataTypes.STRING,
        text: DataTypes.STRING,
        contactCol: DataTypes.STRING,
        questionId: DataTypes.INTEGER
    });

    return Answers;
};
