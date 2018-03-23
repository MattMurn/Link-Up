'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('answers', [
        {
            type: 'textShort',
            text: "Enter this person's name here", 
            contactCol: 'name',
            questionId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        },

        {
            type: 'textShort',
            text: 'Where you met this person', 
            contactCol: 'location',
            questionId: 2,
            createdAt: new Date(),
            updatedAt: new Date()

        },
        {
            type: 'selectOne',
            text: 'Professional', 
            contactCol: 'category',
            questionId: 3,
            createdAt: new Date(),
            updatedAt: new Date()

        },
        {
            type: 'selectOne',
            text: 'Personal', 
            contactCol: 'category',
            questionId: 3,
            createdAt: new Date(),
            updatedAt: new Date()

        },
        {
            type: 'textShort',
            text: "What was ther person's profession", 
            contactCol: 'profession',
            questionId: 4,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            type: 'selectOne',
            text: 'Male', 
            contactCol: 'gender',
            questionId: 5,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            type: 'selectOne',
            text: 'Female', 
            contactCol: 'gender',
            questionId: 5,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            type: 'selectOne',
            text: '0-18: young', 
            contactCol: 'age',
            questionId: 6,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            type: 'selectOne',
            text: '19-39: not so young', 
            contactCol: 'age',
            questionId: 6,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            type: 'selectOne',
            text: '40-65: old', 
            contactCol: 'age',
            questionId: 6,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            type: 'selectOne',
            text: '65+: ooooooold', 
            contactCol: 'age',
            questionId: 6,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            type: 'selectOne',
            text: 'light', 
            contactCol: 'complexion',
            questionId: 7,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            type: 'selectOne',
            text: 'medium-light', 
            contactCol: 'complexion',
            questionId: 7,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            type: 'selectOne',
            text: 'medium', 
            contactCol: 'complexion',
            questionId: 7,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            type: 'selectOne',
            text: 'meduim-dark', 
            contactCol: 'complexion',
            questionId: 7,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            type: 'selectOne',
            text: 'dark', 
            contactCol: 'complexion',
            questionId: 7,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            type: 'selectOne',
            text: 'skinny', 
            contactCol: 'build',
            questionId: 8,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            type: 'selectOne',
            text: 'low key thicc', 
            contactCol: 'build',
            questionId: 8,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            type: 'selectOne',
            text: 'high key thicc', 
            contactCol: 'build',
            questionId: 8,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            type: 'selectOne',
            text: 'LARGE', 
            contactCol: 'build',
            questionId: 8,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            type: 'selectOne',
            text: 'tall', 
            contactCol: 'height',
            questionId: 9,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            type: 'selectOne',
            text: 'medium', 
            contactCol: 'height',
            questionId: 9,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            type: 'selectOne',
            text: 'small', 
            contactCol: 'height',
            questionId: 9,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            type: 'selectOne',
            text: 'black', 
            contactCol: 'hair',
            questionId: 10,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            type: 'selectOne',
            text: 'brown', 
            contactCol: 'hair',
            questionId: 10,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            type: 'selectOne',
            text: 'gray', 
            contactCol: 'hair',
            questionId: 10,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            type: 'selectOne',
            text: 'blonde', 
            contactCol: 'hair',
            questionId: 10,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            type: 'selectOne',
            text: 'white', 
            contactCol: 'hair',
            questionId: 10,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            type: 'textLong',
            text: "How would you describe the person's clothing", 
            contactCol: 'clothing',
            questionId: 11,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            type: 'textLong',
            text: 'What did you talk about, did you have a common interest? Mabye this person had a memorable story you should jot down', 
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
