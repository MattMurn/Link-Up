module.exports = function(sequelize, DataTypes){
    var Options = sequelize.define("Options", {

        text: DataTypes.STRING,
        contactCol: {
            type: DataTypes.STRING
        }
    });
    
    // adds groupId column to contacts.
    return Options;
};