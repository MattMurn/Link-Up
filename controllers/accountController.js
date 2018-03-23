var models = require('../models');

module.exports = function(app) {
  app.get("/newaccount", function(req, res){
    res.render("account");
    console.log("linked");
  })

}