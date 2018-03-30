// gets the data from db, need to format handlebars
// next button should do two things:
// 1. get next question, 
// 2. send info to contacts object. 
    $.get("/api/addnew", function(req, res){
        
        //req is the object of questions / answers.
        var test = req[0].title;
        
        for(var i = 0; i < req.length; ++i){
            console.log(req[i].title);
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
        };
    });

