'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:*/
      // return queryInterface.removeConstraint('answers', 'questionId', {}).then(()=>{
      //   return queryInterface.bulkInsert('answers',
      //     [ 
      //       {
      //       text: 'tall', 
      //       contactCol: 'name',
      //       questionId: 1,
      //       createdAt: new Date(),
      //       updatedAt: new Date()
      //   }
      
      //   ]
      //   , {}).then(()=>{
      //     return queryInterface.addConstraint('answers', ['quesitonId'], {
      //       type: 'FOREIGN KEY',
      //       name: 'questionId',
      //       references: { //Required field
      //         table: 'questions',
      //         field: 'id'
      //       },
      //       onDelete: 'set NULL',
      //       onUpdate: 'cascade'
      //     });
      //   });
      // });
      
      // },

      return queryInterface.bulkInsert('answers', [
        {
            text: 'tall', 
            contactCol: 'name',
            questionId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        },

        {

            text: 'medium', 
            contactCol: 'location',
            questionId: 2,
            createdAt: new Date(),
            updatedAt: new Date()

        },
        {
            type: '',
            text: 'tall', 
            contactCol: 'height',
            questionId: 9,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            type: '',
            text: 'medium', 
            contactCol: 'height',
            questionId: 9,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            type: '',
            text: 'small', 
            contactCol: 'height',
            questionId: 9,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            type: '',
            text: 'tall', 
            contactCol: 'profession',
            questionId: 4,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            type: '',
            text: 'tall', 
            contactCol: 'clothing',
            questionId: 11,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            type: '',
            text: 'tall', 
            contactCol: 'notes',
            questionId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        }
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
