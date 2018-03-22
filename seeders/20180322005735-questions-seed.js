
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('questions', [{
          type: 'textLong',
          title: 'Enter a name',
          contactCol: 'name',
          createdAt: new Date(),
          updatedAt: new Date()
      },

    //   {
    //     type: 'text',
    //     title: 'Enter a location',
    //     contactCol: 'location'
  
    // },
    // {
    //     type: 'select',
    //     title: 'select a category',
    //     contactCol: 'category'
    // },
    // {
    //     type: 'textShort',
    //     title: 'Enter a profession',
    //     contactCol: 'profession'
    // },
    // {
    //     type: 'select',
    //     title: 'Gender',
    //     contactCol: 'gender'
    // },
    // {
    //     type: 'select',
    //     title: 'Age',
    //     contactCol: 'age'
    // },
    // {
    //     type: 'select',
    //     title: 'Complexion',
    //     contactCol: 'complexion'
    // },
    // {
    //     type: 'select',
    //     title: 'build',
    //     contactCol: 'build'
    // },
    // {
    //     type: 'select',
    //     title: 'height',
    //     contactCol: 'height'
    // },
    // {
    //     type: 'select',
    //     title: 'hair',
    //     contactCol: 'hair'
    // },
    // {
    //     type: 'text',
    //     title: 'clothing',
    //     contactCol: 'clothing'
    // },
    // {
    //     type: 'text',
    //     title: 'Notes',
    //     contactCol: 'notes'
    // }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('questions', null, {});
  }
};

