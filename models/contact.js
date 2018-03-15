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
            validate: {
                isAlpha: true,
            }
        },
        build: {
            type:DataTypes.STRING, 
            allowNull: true, 
            validate: {
                isAlphaNumeric: true
            }
        },
        height: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isAlphaNumeric: true
            }
        },
        complexion: {
            type: DataTypes.STRING, 
            allowNull: true, 
            validate: {
                isAlphaNumeric:true
            }
        },
        hair: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isAlphaNumeric: true
            }
        },
        attire: {
            type: DataTypes.TEXT, 
            allowNull: true,
            validate: {
                isAlphaNumeric: true
            }
        },
        personality: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                isAlphaNumeric: true
            }
        },
        notes: {
            
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                isAlphaNumeric: true
            }
        }
    });
    // association that is goihttps://drive.google.com/file/d/1w3zSQXN-a4KpvgW9O6zmztbuW6veKt9q/view?usp=sharingng to have a column for userId.
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
