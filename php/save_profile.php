<?php
session_start();

include('db_connect.php');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $user_name = $_POST['user_name'];
    $user_email = $_POST['user_email'];
    $age = $_POST['age'];
    $dob = $_POST['dob'];
    $phone = $_POST['phone'];


    $query = "INSERT INTO profile (user, email, age, dob, phone) VALUES ('$user_name', '$user_email', '$age', '$dob', '$phone')";
    mysqli_query($con, $query);

    header("Location: profile.php");
} else {

    header("Location: profile.php");
}
?>
