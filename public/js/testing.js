/* here's the dummy ajax functions I was using for the different requests:
 they all correspond with the models/user or models/contact




  initial sign up;
   populates the db with object information newUser which
   is an object that properties were filled using JQ .val().trim()
    var newUser = {
        q1: ...
        q2: ...
    }
   */
  $.post("/api/user", newUser)
  .then();

/* used this to get all user that "signed in" 
    and attach the userId to retrieve contact info/ 
    create new contact.
*/
  $.get("/api/user/:id", function(data) { 
});

 /*create a new contact
    similar to user post route. newContact is an object 
    that properties were filled using JQ .val().trim()

    var newContact = {
        q1: ...
        q2: ...
    }
    */
  $.post("/api/contact", newContact)
  .then();

/*
  for single contact get by id. data holds id's whole object

*/
  $.get("/api/contact/:id", function(data) { 
});

