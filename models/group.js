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
    // adds groupId column to contacts.
    Group.associate = function(models){
        Group.hasMany(models.Contact, {
            
        })
    };
    return Group;
};

/*
this table is going to be a to contain
ContactId and UserId by category.

used when queried by contact groups.

*/