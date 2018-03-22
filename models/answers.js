module.exports = function(sequelize, DataTypes){
    var Answers = sequelize.define("Answers", {

        text: DataTypes.STRING,
        contactCol: DataTypes.STRING,
        questionId: DataTypes.INTEGER
    });
    Answers.associate = function(models){
        // Options.belongsTo(models.Questions, {foreignKey: 'questionId'});
        // adds groupId column to contacts.  
    };
    Answers.bulkCreate([
        {
            type: DataTypes.STRING,
            contactCol: 'name',
            questionId: 1
        },
        {
            type: DataTypes.STRING,
            contactCal: 'location',
            questionId: 2

        },
        {
            text: 'tall', 
            contactCol: 'height',
            questionId: 9
        },
        {
            text: 'medium', 
            contactCol: 'height',
            questionId: 9
        },
        {
            text: 'small', 
            contactCol: 'height',
            questionId: 9
        },
        {
            type: DataTypes.STRING,
            contactCol: 'profession',
            questionId: 4
        },
        {
            type: DataTypes.STRING,
            contactCol: 'clothing',
            questionId: 11
        },
        {
            type: DataTypes.STRING,
            contactCol: 'notes',
            questionId: 1
        }
    ]);
 
    
    return Answers;
};
