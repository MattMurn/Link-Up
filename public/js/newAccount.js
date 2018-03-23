//add this page to handlebars
//make click events. 
$(document).ready(function() {
    $('.newSubmit').on('click', function(){
        var newUser = {
            firstName: $().val().trim(),
            lastName: $().val().trim(),
            email: $().val().trim(),
            password: $().val().trim()
        };

        console.log("newSubmit linked");    

    });

});