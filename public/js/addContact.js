// Function for looping through questions while creating a new contact
var addContact = {
    // Load the page by passing in a question
    loadForm: function(questionArr, answerArr, questionIndex, req, res) {

        // Load question
        var thisQuestion = questionArr[questionIndex];
    
        // Load into html
        res.render("question", {
            question: thisQuestion,
            helpers: {
              // This helper code made obsolete by moving buttons to question template from select template
                ifCond: function (variable, value, options) { 
                    if (variable === value) {
                        return options.fn(this);
                    }
                    return options.inverse(this);
                }
            }
          });
        },

    // Store the answer submitted by the use
    storeAnswer: function(questionArr, answerArr, thisQuestionId, thisAnswer, questionIndex) {
        // Add answer to array to prepare for sending back to database
        answerArr.push({
            questionId: thisQuestionId,
            answer:     answer,
            contactId:  questionArr[0].contactId
        });

        // Increment the questionIndex
        questionIndex++;

        // Check if any more questions
        if (questionIndex < questionArr.length) {
            // Load next page
            
            loadForm(questionArr, answerArr, questionIndex);
        }
        else {
            // Send data to databse

        }
    }
}
// Get question data from database
var questionArr = [
    {
      id: 1,  // QuestionID
      // Type is either "check", "selectOne", "textShort", or "textLong"
      type: "check",  // Determines which template to load
      title: "What was their personality like?",  // The prompt for this entry
      options: ["Serious", "Quiet", "Warm", "Friendly", "Bold"],  // The options to select, or category names for text entry
      contactId: 1  // Contact ID being created
    },
    {
      id: 2,  // QuestionID
      // Type is either "check", "selectOne", "textShort", or "textLong"
      type: "selectOne",  // Determines which template to load
      title: "Gender?",  // The prompt for this entry
      options: ["Male", "Female"],  // The options to select, or category names for text entry
      contactId: 1  // Contact ID being created
    },
    {
      id: 3,  // QuestionID
      // Type is either "check", "selectOne", "textShort", or "textLong"
      type: "textShort",  // Determines which template to load
      title: "Occupation?",  // The prompt for this entry
      options: ["The person's job was...?"],  // The options to select, or category names for text entry
      contactId: 1  // Contact ID being created
    },
    {
      id: 4,  // QuestionID
      // Type is either "check", "selectOne", "textShort", or "textLong"
      type: "textLong",  // Determines which template to load
      title: "Notes",  // The prompt for this entry
      options: ["Conversation topics, hobbies, etc."],  // The options to select, or category names for text entry
      contactId: 1  // Contact ID being created
    }
  ];


  // Create array for storing answers
var answerArr = [];
var questionIndex = 0;

// Get answer from html
        // check and selectOne:
            // Loop through each button, concatenating answers into a single string, then store data
        // textShort, textLong: Just store the answer

    // next question

module.exports = addContact;