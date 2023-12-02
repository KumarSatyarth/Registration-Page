$(document).ready(function() {
    var userId = 'your_user_id_here';
    $.ajax({
        type: 'POST',
        url: 'profile.php',
        data: {
            action: 'fetchProfile',
            userId: userId
        },
        success: function(response) {
            var profileData = JSON.parse(response);

            $('#name').val(profileData.name);
            $('#email').val(profileData.email);
            $('#age').val(profileData.age);
            $('#dob').val(profileData.dob);
            $('#phone').val(profileData.phone);
        },
        error: function(err) {
        }
    });

    $('#profileForm').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: 'POST',
            url: 'profile.php',
            data: {
                action: 'updateProfile',
                userId: userId,
                name: $('#name').val(),
                email: $('#email').val(),
                age: $('#age').val(),
                dob: $('#dob').val(),
                phone: $('#phone').val()
            },
            success: function(response) {
                var result = JSON.parse(response);
                if (result.success) {
                    console.log('Profile updated successfully');
                } else {
                    console.log('Failed to update profile');
                }
            },
            error: function(err) {
            }
        });
    });
});