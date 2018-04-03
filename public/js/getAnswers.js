// gets the data from db, need to format handlebars
// next button should do two things:
// 1. get next question, 
// 2. send info to contacts object. 

// done button does two things:
// 1. hit post route with object
// 2. go to homepage

    $.get("/api/addnew/1", function(req, res){
        
        //req is the object of questions / answers.
       var newLink = {
           firstName: $(".1").text(),
           lastName: $(".2").text()

       }

        for(var i = 0; i < req.length; ++i){
            //get first question.
            var question = {
                title: req[i].title,
                type: req[i].title
            }

            if(req[i].Answers.length>1){
                for(var j = 0; j < req.length; ++j){
                    // if text is not undefined, then console log answer.
                    if (req[i].Answers[j].text = undefined){
                        // console.log(req[i].Answers[j].text);
                        console.log("CONTINUE");
                    }
                    else{
                        continue;
                    }
                }
            }
            res.render("getQuestions", req)
        };
    });

function getQuestion(number, request){
    // call this function in click event
}