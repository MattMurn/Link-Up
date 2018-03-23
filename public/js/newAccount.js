//add this page to handlebars
//make click events. 
$(document).ready(function() {
    
    $('#newSubmit').on('click', function(){
        event.preventDefault();
        var newUser = {
            firstName: $('#firstName').val().trim(),
            lastName: $('#lastName').val().trim(),
            email: $('#email').val().trim(),
            password: $('#password').val().trim()
        };
        console.log(newUser);
        $.post("/api/user", newUser)
        .then(window.location.href = "/");

    });

});