var models = require('../models');
module.exports = function (app) {

app.get("/login", function(req, res){
    res.render("login");
    console.log("linked");
  });
}