// Function for looping through questions while creating a new contact
var addContact = {
    // Load the page by passing in a question
    loadForm: function(questionArr, questionId, req, res) {

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
        }
}

module.exports = addContact;
