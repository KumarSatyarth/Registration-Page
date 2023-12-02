<?php

require 'vendor/autoload.php';

use MongoDB\Client;

// Replace the following with your actual MongoDB connection string
$mongoConnectionString = 'mongodb+srv://kumarsat0910:U26IWhwCzcbNpt6r@cluster0.cbo00sx.mongodb.net/profile_db';

try {
    $mongoClient = new Client($mongoConnectionString);

    
    $mongoDB = $mongoClient->selectDatabase('profile_db');

    echo 'Connected to MongoDB successfully';
} catch (Exception $e) {
    die('MongoDB Connection failed: ' . $e->getMessage());
}

?>