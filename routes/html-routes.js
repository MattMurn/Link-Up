// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {
  // Get code for looping through questions when adding a contact
  var addContact = require(path.join(__dirname, "../public/js/addContact"));

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.render("index");
    // res.sendFile(path.join(__dirname, "../public/index.html"));
  });


  // Get question data from database
    // here is a set of test data
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

  // Page for entering data for a new person
  //      Only this single route is needed for all of the input categories
  //      To display the correct template the question object must be used with handlebars
  app.get("/addnew/:questionId", function(req, res) {
    // store question ID from request
    var questionId = req.params.questionId;

    // Run code to load form
    addContact.loadForm(questionArr, questionId, req, res);

  });
}