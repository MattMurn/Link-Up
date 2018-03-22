'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:*/
      return queryInterface.bulkInsert('answers', [
        {
            text: 'tall', 
            contactCol: 'name',
            questionId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        },

        // {
        //     type: '',
        //     text: 'tall', 
        //     contactCol: 'location',
        //     questionId: 2

        // },
        // {
        //     type: '',
        //     text: 'tall', 
        //     contactCol: 'height',
        //     questionId: 9
        // },
        // {
        //     type: '',
        //     text: 'medium', 
        //     contactCol: 'height',
        //     questionId: 9
        // },
        // {
        //     type: '',
        //     text: 'small', 
        //     contactCol: 'height',
        //     questionId: 9
        // },
        // {
        //     type: '',
        //     text: 'tall', 
        //     contactCol: 'profession',
        //     questionId: 4
        // },
        // {
        //     type: '',
        //     text: 'tall', 
        //     contactCol: 'clothing',
        //     questionId: 11
        // },
        // {
        //     type: '',
        //     text: 'tall', 
        //     contactCol: 'notes',
        //     questionId: 1
        // }
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:*/
      return queryInterface.bulkDelete('answers', null, {});
    
  }
};
