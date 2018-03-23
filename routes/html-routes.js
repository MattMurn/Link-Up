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
  // Page for entering data for a new person
  //      Only this single route is needed for all of the input categories
  //      To display the correct template the question object must be used with handlebars
  app.get("/addnew/:questionId", function(req, res) {
    // store question ID from request
    var questionId = req.params.questionId;

    // Run code to load form
    addContact.loadForm(questionArr, questionId, req, res);

  });

  app.get("/login", function(req, res){
    res.render("login");
    console.log("linked");
  })
}

