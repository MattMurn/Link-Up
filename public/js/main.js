$(document).ready(function() {
    //click handlers for the homepage.
    $('#add-link').on('click', function(){
        console.log("add link");
        $.post(`./api/newcontact`).then(function(response){
            // Store the contact ID so it can be used to post to database
            localStorage.setItem("contactId", response);
            $.get('/addnew/1').then(function(data){
                window.location.href = `./addnew/1`;
            }).catch(function(err) {
                console.log(err);
              });
        });

    });


    $('#view-links').on('click', function(){
        console.log("view links");
        $.get('/index').then(function(data){
            window.location.href = './index';
        
        }).catch(function(err){
            console.log(err);
        })
    })
});