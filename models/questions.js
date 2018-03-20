module.exports = function(sequelize, DataTypes){
    var Question = sequelize.define("Question", {

        type: DataTypes.STRING,
        title: {
            type: DataTypes.STRING
        },
        contactCol: {
            type: DataTypes.STRING
        }
    });
    
    Question.associate = function(models){
        Question.hasMany(models.Options, {
           // need to figure out how to join with the options/ 
        });
    };
    // adds groupId column to contacts.
    return Question;
};