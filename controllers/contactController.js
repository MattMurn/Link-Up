
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
    // task.update({ title: 'foooo', description: 'baaaaaar'}, {fields: ['title']}).then(() => {
    //     // title will now be 'foooo' but description is the very same as before
    //    })
    app.put("/api/contacts/:id/:contactCol/:answer", function (req, res) {
        
        // req.body need to be more specific if user changes
        // just 1 property?
        db.Contact.update({
            firstName: req.params.answer,
            lastName: req.params.answer,
            where: req.params.answer,
            age: req.params.answer,
            build: req.params.answer,
            gender: req.params.answer,
            occupation: req.params.answer,
            hair: req.params.answer,
            complexion: req.params.answer,
            clothing: req.params.answer,
            personality: req.params.answer,
            notes: req.params.answer,
         }, {
             fields: [`${req.params.contactCol}`]
         },
         {
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
            console.log(dbContact.where);
            var hbsObj = {
                contact: dbContact
            };
            res.render("update", hbsObj);
        });
    })
};
