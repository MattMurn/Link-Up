$(document).ready(function() {
    // Getting references to our form and inputs
    var loginForm = $("form.login");
    var emailInput = $("input#email-input");
    var passwordInput = $("input#password-input");
  
    // When the form is submitted, we validate there's an email and password entered
    loginForm.on("submit", function(event) {

      event.preventDefault();
      // var param = emailInput.val().trim();
      // $.get(`/api/users/:id`, param).then(function(data) {
      //   // for(var i= 0; i < data.length; i++){
      //   //   console.log(data[i].email);
      //   // };
      //   console.log(param);
      //   console.log(data);
      // });
      var userData = {
        email: emailInput.val().trim(),
        password: passwordInput.val().trim()
      };
      console.log(userData.email);
      console.log(userData.password);
      console.log(window.location);
      
      if (!userData.email || !userData.password) {
        return;
      }
  
      // If we have an email and password we run the loginUser function and clear the form
      loginUser(userData.email, userData.password);
      emailInput.val("");
      passwordInput.val("");
    });
    
    // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
    function loginUser(email, password) {
      $.post("/api/login", {
        email: email,
        password: password
      }).then(function(data) {
        console.log(data);
        window.location.replace(data);
        console.log(data);
        // If there's an error, log the error
      }).catch(function(err) {
        console.log(err);
      });
    };  
  
  });
  