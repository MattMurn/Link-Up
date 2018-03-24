$(document).ready(function() {

    $('#add-link').on('click', function(){
        console.log("add link");
        $.get('/addnew/1').then(function(data){
            window.location.href = `./addnew/1`;
        }).catch(function(err) {
            console.log(err);
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