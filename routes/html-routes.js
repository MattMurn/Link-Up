// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

var isAuthenticated = require("../config/middleware/isAuthenticated");

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

  app.get("/addnew/:questionId", function(req, res) {
    // store question ID from request
    var questionId = req.params.questionId;

    // Run code to load form
    addContact.loadForm(questionArr, questionId, req, res);

  });

  app.get("/index", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
  });

  app.get("/api/login", function(req, res) {
    // If the user already has an account send them to the members page
    //this allows the userId to persist from login page to homepage. (see main.js for other side)
    if (req.user) {
      res.json(req.user);
    }

  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/homepage", isAuthenticated, function(req, res) {
      res.render("homepage");

  });

};