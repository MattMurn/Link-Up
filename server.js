// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************

// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

//Require handlebars for html templating
var exphbs = require("express-handlebars");

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
require("./controllers/html-routes.js")(app);
require("./controllers/userController.js")(app);
require("./controllers/contactController.js")(app);
require("./controllers/questionController.js")(app);
require("./controllers/accountController.js")(app);
require("./controllers/loginController.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function
  () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});