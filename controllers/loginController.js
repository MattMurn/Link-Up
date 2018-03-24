var db = require('../models');
var passport = require('passport');
module.exports = function (app) {

// app.get("/login", function(req, res){
//     res.render("login");
//     console.log("linked");
//   });


app.post('/login', 
  passport.authenticate('local', {successRedirect: '/homepage', failureRedirect: '/signup' }),
  function(req, res) {
    console.log('route hit');

    // res.render('index');
  });
}