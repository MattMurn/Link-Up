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
            db.Answers.findAll({
                where: {
                    questionId: req.params.id
                }
            }).then(function (Answers) {
                // Check if this is the last question
                var lastQuestionId = 12;
                var lastQuestion = false;
                if (question[0].id === 12) {
                    lastQuestion = true;
                }
                // Create an array of only the answer options
                var answerArr = [];
                for (var i = 0; i < Answers.length; i++) {
                    answerArr.push(Answers[i].text);
                }
                // Create the object that handlebars needs to generate the form
                var templateDataObj = {
                    id: question[0].id,
                    type: question[0].type,
                    title: question[0].title,
                    contactCol: question[0].contactCol,
                    answers: answerArr,
                    lastQuestion: lastQuestion
                }

                var hbsObj = {
                    question: templateDataObj,     
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