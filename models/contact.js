module.exports = function(sequelize, DataTypes){
    var Contact = sequelize.define("Contact", {
        
        name: {

            type: DataTypes.STRING, 
            allowNull: false, 
            validate: {
                len: [1]
            }
        },
        where: {

            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        createdAt : {
            type: DataTypes.DATE,
            defaultValue: sequelize.NOW
        },
        age: {

            type: DataTypes.INTEGER, 
            allowNull: true, 
            validate: {
                len: [1]
            }
        },
        build: {
            type:DataTypes.STRING, 
            allowNull: true, 
            validate: {
                len: [1]
            }
        },
        gender: {
            type:DataTypes.STRING, 
            allowNull: true, 
            validate: {
                len: [1]
            }
        },
        occupation: {
            type:DataTypes.STRING, 
            allowNull: true, 
            validate: {
                len: [1]
            }
        },
        hair: {
            type:DataTypes.STRING, 
            allowNull: true, 
            validate: {
                len: [1]
            }
        },
        height: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        complexion: {
            type: DataTypes.STRING, 
            allowNull: true, 
            validate: {
                len: [1]
            }
        },
        hair: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        clothing: {
            type: DataTypes.TEXT, 
            allowNull: true,
            validate: {
             len: [1]
            }
        },
        personality: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        notes: {
            
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                len: [1]
            }
        }
    });
    // association that is goihttps://drive.google.com/file/d/1w3zSQXN-a4KpvgW9O6zmztbuW6veKt9q/view?usp=sharingng to have a column for userId.
    // add belongsTo(models.Group, {}) to get groupID in contacts tables.
   
    return Contact;
};
