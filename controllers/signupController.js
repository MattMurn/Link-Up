var models = require('../models');

module.exports = function(app) {
  // get route that handles signup page.
  app.get("/signup", function(req, res){
    res.render("signup");
    console.log("linked");
  })

}