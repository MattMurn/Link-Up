var db = require("../models");


module.exports = function (app) {

    app.get("/api/addnew/:id", function (req, res) {
        db.Question.findAll({
            include: {
                model: db.Answers,
            }
        }).then(function (dataQ) {
            res.json(dataQ);
            console.log(dataQ);
        });
    })
    // HTML ROUTES
    app.get("/addnew/:id", function (req, res) {
        db.Question.findOne({
            where: {
                id: req.params.id
            }

        }).then(function (question) {

            db.Answers.findAll({
                where: {
                    questionId: req.params.id
                }
            }).then(function (question, Answers) {
                question.Answers = Answers;
                    
                var hbsObj = {
                    question: question,
                    helpers: {
                        ifCond: function (variable, value, options) {
                          if (variable === value) {
                            return options.fn(this);
                          }
                          return options.inverse(this);
                        }
                      }
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