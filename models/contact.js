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
        attributes: {

            type: DataTypes.STRING, 
            allowNull: true, 
        },
        notes: {
            
            type: DataTypes.TEXT,
            allowNull: true
        }

    });
    // association that is going to have a column for userId.
    Contact.associate = function(models){
        Contact.belongsTo(models.User,{
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Contact;
};
