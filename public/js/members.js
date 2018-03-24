$(document).ready(function() {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    console.log("This is the members.js file");
    $.get("/api/user_data").then(function(data) {
      console.log("MEMBERS!!!!!!!!!!!");
      $("#getId").text(data.email);
      console.log(data.id);
    });
  });
  