var db = require('../models');
var passport = require('passport')
module.exports = function (app) {

app.get("/login", function(req, res){
    res.render("login");
    console.log("linked");
  });

// // check to see if user email is in the db
// app.get("/api/users", function(req, res){
//   db.User.findAll({
//     where: {
//       email: req.params.email
//     }
//   }).then(function(data){
//     res.json(data);
//   })
// });
app.post('/login', 
  passport.authenticate('local', {successRedirect: '/index', failureRedirect: '/signup' }),
  function(req, res) {
    console.log('route hit');
    res.render('index');
  });
}