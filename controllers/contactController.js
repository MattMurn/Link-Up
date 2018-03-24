
/*
User Routes: 
    get User
    get specific User
    update User
    delete User
*/

var db = require("../models");
// this route gets User info and contacts 
module.exports = function (app) {
    // CONTACT API ROUTES

    //get all users
    //route works
    app.get("/api/contacts", function (req, res) {
        console.log('got here');
        db.Contact.findAll({

        }).then(function (dbContact) {
            res.json(dbContact);
        })
    })
    //get user by id
    //route works
    app.get("/api/contacts/:id", function (req, res) {
        db.Contact.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (dbContact) {
            res.json(dbContact);
        });
    });
    //create new user
    //works
    app.post("/api/newcontact", function (req, res) {
        db.Contact.create(req.body).then(function (dbContact) {
            // save ID of new contact
            var contactId = dbContact.id;
            res.json(contactId);
        });
    });
    //
    app.put("/api/contacts/:contactId/:contactCol/:answer", function (req, res) {
        // req.body need to be more specific if user changes
        // just 1 property?
        db.Contact.update(req.body, {
            where: {
                id: req.params.id
            }
        }).then(function (dbContact) {
            res.json(dbContact);
        });
    });
    // delete user and associated contacts
    // validation / onDelete is set to cascade which will handle
    // contact destruction.
    app.delete("/api/contacts/:id", function (req, res) {
        db.Contact.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbContact) {
            res.json(dbContact);
        })
    })


    // CONTACT HTML ROUTES
    // Contact page
    app.get("/index", function (req, res) {
        db.Contact.findAll({}).then(function (dbContact) {
            var hbsObj = {
                contacts: dbContact
            };
            res.render("people", hbsObj);
        })
    })

    app.get("/update/:id", function (req, res) {
        db.Contact.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (dbContact) {
            var hbsObj = {
                contact: dbContact
            };
            res.render("update", hbsObj);
        });
    })
};
