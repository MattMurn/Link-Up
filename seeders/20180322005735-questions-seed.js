
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('questions', [{
          type: 'textLong',
          title: 'Enter a name',
          contactCol: 'name',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
        type: 'text',
        title: 'Enter a location',
        contactCol: 'location',
        createdAt: new Date(),
        updatedAt: new Date()
  
    },
    {
        type: 'select',
        title: 'select a category',
        contactCol: 'category',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: 'textShort',
        title: 'Enter a profession',
        contactCol: 'profession',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: 'select',
        title: 'Gender',
        contactCol: 'gender',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: 'select',
        title: 'Age',
        contactCol: 'age',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: 'select',
        title: 'Complexion',
        contactCol: 'complexion',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: 'select',
        title: 'build',
        contactCol: 'build',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: 'select',
        title: 'height',
        contactCol: 'height',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: 'select',
        title: 'hair',
        contactCol: 'hair',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: 'text',
        title: 'clothing',
        contactCol: 'clothing',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: 'text',
        title: 'Notes',
        contactCol: 'notes',
        createdAt: new Date(),
        updatedAt: new Date()
    }
  ], {});
  },


  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('questions', null, {});
  }
};

