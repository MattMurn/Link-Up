$(document).ready(function() {
    $("#add-contact-button").click(function() {
        // Create new contact in database
        $.ajax({
            url: "./api/newcontact",
            type: "POST"
        }).then(function(response) {
            // Store the contact ID so it can be used to post to database
            localStorage.setItem("contactId", response);

            // Load the 1st question page
            window.location.href = `./addnew/1`;
        });
    });
});