$(document).ready(function() {
    $('#loginForm').submit(function(e) {
      e.preventDefault();
      
      // Get form data
      var formData = {
        username: $('#username').val(),
        password: $('#password').val()
      };
  
      // Send AJAX request to login.php
      $.ajax({
        type: 'POST',
        url: 'login.php',
        data: formData,
        success: function(response) {
          // Handle successful login, redirect, etc.
          console.log('Login successful');
          // Redirect to profile page or perform other actions
        },
        error: function(err) {
          // Handle login failure, display error message, etc.
          console.log('Login failed');
        }
      });
    });
  });
  