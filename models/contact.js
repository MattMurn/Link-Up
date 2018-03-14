module.exports = function(sequelize, DataTypes){
    var Contact = sequelize.define("Contact", {
        
        name: {

            type: DataTypes.STRING, 
            allowNull: false, 
            validate: {
                len: [1],
                isAlphaNumeric: true
            }
        },
        where: {

            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        // createdAt is a default that will give us time/date
        age: {

            type: DataTypes.INTEGER, 
            allowNull: true, 
            validation: {
                isAlpha: true,
            }
        },
        build: {
            type:DataTypes.STRING, 
            allowNull: true, 
            validation: {
                isAlphaNumeric: true
            }
        },
        notes: {
            
            type: DataTypes.TEXT,
            allowNull: true
        }

    });
    // association that is going to have a column for userId.
    // add belongsTo(models.Group, {}) to get groupID in contacts tables.
    Contact.associate = function(models){
        Contact.belongsTo(models.User,{
            foreignKey: {
                allowNull: false
            }
        });
        Contact.belongsTo(models.Group, {
            foreignKey: {
                allowNull: false
            }
        });

    };

    return Contact;
};
