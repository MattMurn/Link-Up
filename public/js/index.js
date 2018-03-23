$(document).ready(function() {
    $("#add-contact-button").click(function() {
        // Define id of 1st question
        var firstQuestionId = 1;
        
        // Create new contact in database
        

        // load form page, passing in first question ID and contact ID
        window.location.href = `./addnew/${firstQuestionId}`;
    });
});