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
      var question = {
        id: 2,
        title: "This is a question, there are many like it but this one is this one",

        // For checkbox, oneClick, and userEntry, only 1 of the 3 can be true.
        // Checkbox for an array of thumbnails, many of them can be selected before submitting
        checkbox: false,
        // OneClick for an array of thumbnails where only a single one can be selected before submitting
        oneClick: false,
        // UserEntry for providing a list of text entry fields
        userEntry: true,
        options: ["What industry does this person work in?", "What is thie person's job title?", "What is a common interest you share with this person?"]
      }
      var questionObject = {
        question: question
      }

      res.render("question", {
        question: question,
        helpers: {
          // This helper code made obsolete by moving buttons to question template from select template
          // ifCond: function (variable, value, options) { 
          //   if (variable === value) {
          //     return options.fn(this);
          //   }
          //   return options.inverse(this);
          // }
      }
      });
    });
};