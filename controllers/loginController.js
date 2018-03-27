var db = require('../models');
var passport = require('passport');
module.exports = function (app) {

app.post('/login', 
  passport.authenticate('local', {successRedirect: '/homepage', failureRedirect: '/signup' }),
  function(req, res) {
    // console.log('route hit');

    // res.render('index');
  });
}