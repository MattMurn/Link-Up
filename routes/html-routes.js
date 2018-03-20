// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.render("index");
    // res.sendFile(path.join(__dirname, "../public/index.html"));
  });

    // Page for entering data for a new person
    //      Only this single route is needed for all of the input categories
    //      To display the correct template the question object must be used with handlebars
    //      
    app.get("/addnew", function(req, res) {
      
      // Model for question object to pass into template
      var question = [
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

      res.render("question", {
        question: question,
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
    });
};