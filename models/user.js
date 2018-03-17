module.exports = function(sequelize, DataTypes){
    var User = sequelize.define('User', {
        name: {
           type: DataTypes.STRING,
           allowNull: false, 
           validate: {
               len: [1]
           }
        }, 
        email: {
            type: DataTypes.STRING, 
            allowNull: false, 
            validate: {
                isEmail: true
            }
        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: true
            }
        }
    });

    User.associate = function(models){
        User.hasMany(models.Contact, {
            onDelete: "cascade"
        });
        User.hasMany(models.Group, {});
    };
    
    return User;
};

/*
syntax for association.
Contact.associate = function(models){
    Contact.belongsTo(models.User, {
        foreignKey: {
            allowNull: false
        }
    });
    //have to return Contact after its association
    is applied.
    return Contact;
}

*/