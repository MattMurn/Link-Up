var db = require("../models");


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

            db.Options.findAll({
                where: {
                    questionId: req.params.id
                }
            }).then(function (question, options) {
                question.options = options;
                    
                var hbsObj = {
                    question: question,
                };
                
                res.render("question", hbsObj);
            });
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