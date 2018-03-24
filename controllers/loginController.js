var db = require('../models');
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

}