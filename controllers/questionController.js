var db = require("../models");


module.exports = function (app) {

    app.get("/api/addnew/:id", function (req, res) {
        db.Question.findAll({
            // include: {
            //     model: db.Answers,
            // }
        }).then(function (dataQ) {
            res.json(dataQ);
            // console.log(dataQ);
        });
    })
    // HTML ROUTES
    app.get("/addnew/:id", function (req, res) {
        db.Question.findAll({
            where: {
                id: req.params.id
            }

        }).then(function (question) {
            // console.log(question[0].title);
            db.Answers.findAll({
                where: {
                    questionId: req.params.id
                }
            }).then(function (Answers) {
                console.log(question);
                var test = question[0];
                test.answers =Answers;
                // question.Answers = Answers;
                    
                var hbsObj = {
                    question: test,     
                    helpers: {
                        ifCond: function (variable, value, options) {
                          if (variable === value) {
                            return options.fn(this);
                          }
                          return options.inverse(this);
                        }
                      }
                };
                // console.log(hbsObj.question);
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