module.exports = function(sequelize, DataTypes){
    var Group = sequelize.define("Group", {

        category: {
            type: DataTypes.STRING, 
            allowNull: false, 
            validate: {
                len: [1],
                isAlphaNumeric: true    
            }
        },
    });
    return Group;
};

/*
this table is going to be a to contain
ContactId and UserId by category.

used when queried by contact groups.

*/