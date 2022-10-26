<?php # mysql_connect.php

// This file contains the database access information.
// This file also establishes a connection to MySQL and
   selects the database.  

// Set the database access information as constants.
DEFINE ('DB_USER', 'username');
DEFINE ('DB_PASSWORD', 'password');
DEFINE ('DB_HOST', 'localhost');
DEFINE ('DB_NAME', 'sitename');

// Make the connnection.
$dbc = @mysql_connect (DB_HOST, DB_USER, DB_PASSWORD) OR
    die ('Could not connect to MySQL: ' . mysql_error() );

// Select the database.
@mysql_select_db (DB_NAME) OR
    die ('Could not select the database: ' . mysql_error() );  
?>

