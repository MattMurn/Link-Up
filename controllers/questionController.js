var db = require("../models/questions.js");

]

module.exports = function (app) {

    app.get("/api/addnew/:id", function (req, res) {
        db.Questions.findAll({
            include: {
                model: db.Options,
            }
        }).then(function (dataQ) {
            res.json(dataQ);
            console.log(dataQ);
        });
    })
    // HTML ROUTES
    app.get("/addnew/:id", function (req, res) {
        db.Questions.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (question) {
            var hbsQuestionObj = {
                question: question
            };
            res.render("question", hbsQuestionObj);
        });

        db.Options.findAll({
            where: {
                questionId: req.params.id
            }
        }).then(function (options) {
            var hbsOptionsObj = {
                options: options
            };

            res.render("question", hbsOptionsObj);
        });
    });

};


// User.findAll({
//     include: {
//       model: UserQuestionAnswerRel,
//       include: [
//         { model: Question },
//         { model: Answer }
//       ]
//     }
//   }).then...