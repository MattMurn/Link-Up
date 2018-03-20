module.exports = function(sequelize, DataTypes){
    var Questions = sequelize.define("Questions", {

        type: DataTypes.STRING,
        title: {
            type: DataTypes.STRING
        },
        contactCol: {
            type: DataTypes.STRING
        }
    });
    
    // Questions.associate = function(models){
    //     Questions.hasMany(models.Options, {foreignKry: 'questionId'});
    // };
    Questions.bulkCreate([{
        type: 'textShort', 
        title: 'Enter a name',
        contactCol: 'name'
       
    },
    {
        type: 'text', 
        title: 'Enter a location',
        contactCol: 'location'
        
    },
    {
        type: 'select', 
        title: 'select a category',
        contactCol: 'category'
    },
    {
        type: 'textShort', 
        title: 'Enter a profession',
        contactCol: 'profession'
    },
    {
        type: 'select', 
        title: 'Gender',
        contactCol: 'gender'
    },
    {
        type: 'select', 
        title: 'Age',
        contactCol: 'age'
    },
    {
        type: 'select', 
        title: 'Complexion',
        contactCol: 'complexion'
    },
    {
        type: 'select', 
        title: 'build',
        contactCol: 'build'
    },
    {
        type: 'select', 
        title: 'height',
        contactCol: 'height'
    },
    {
        type: 'select', 
        title: 'hair',
        contactCol: 'hair'
    },
    {
        type: 'text', 
        title: 'clothing',
        contactCol: 'clothing'
    },
    {
        type: 'text', 
        title: 'Notes',
        contactCol: 'notes'
    }

    ]).then(function(){
                console.log("created")
    });

    // adds groupId column to contacts.
    return Questions;
};