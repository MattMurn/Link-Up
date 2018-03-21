/*
User Routes: 
    get User
    get specific User
    update User
    delete User
*/

var db = require("../models/user.js");
// this route gets User info and contacts 
module.exports = function(app) {
    //get all users
    app.get("/api/users", function(req, res){
        db.User.findAll({
            where: {
                id: req.params.id
            }
        }).then(function(dbUser){
            res.json(dbUser);
        })
    })
    //get user by id
    app.get("/api/users/:id", function(req, res){
        db.User.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(dbUser){
            res.json(dbUser);
        });
    });
    //creat new user
    app.post("/api/user", function(req, res){
        db.User.create(req.body).then(function(dbUser){
            res.json(dbUser);
        });
    });
    app.put("/api/user/:id", function(req, res){
        // req.body need to be more specific if user changes
        // just 1 property?
        db.User.update(req.body, {
            where: {
                id: req.params.id
            }
        }).then(function(dbUser){
            res.json(dbUser);
        });
    });
    // delete user and associated contacts
    // validation / onDelete is set to cascade which will handle
    // contact destruction.
    app.delete("/api/user/:id", function(req, res){
        db.User.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbUser){
            res.json(dbUser);
        })
    })
};

