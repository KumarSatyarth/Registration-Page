$(document).ready(function() {
    $('#registerForm').submit(function(e) {
      e.preventDefault();
      
      // Get form data
      var formData = {
        username: $('#username').val(),
        password: $('#password').val(),
        email: $('#email').val()
        // Add other required fields
      };
  
      // Send AJAX request to register.php
      $.ajax({
        type: 'POST',
        url: 'register.php',
        data: formData,
        success: function(response) {
          // Handle successful registration, redirect, display success message, etc.
          console.log('Registration successful');
          // Redirect to login page or perform other actions
        },
        error: function(err) {
          // Handle registration failure, display error message, etc.
          console.log('Registration failed');
        }
      });
    });
  });
  