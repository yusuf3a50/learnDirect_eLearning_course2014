<?php # view_users.php

// This script retrieves all the records from the users table.
// This new version allows the results to be sorted in different ways.

$page_title = 'View the Current Users';
include ('./includes/header.html');

// Page header.
echo '<h1 id="mainhead">Registered Users</h1>';

require_once ('./mysql_connect.php'); // Connect to the db.

// Number of records to show per page:
$display = 10;

// Determine how many pages there are.
if (isset($_GET['np'])) { // Already been determined.
    $num_pages = $_GET['np'];
} else { // Need to determine.

    // Count the number of records
    $query = "SELECT COUNT(*) FROM users ORDER BY registration_date ASC";  
    $result = @mysql_query ($query);
    $row = mysql_fetch_array ($result, MYSQL_NUM);
    $num_records = $row[0];

    // Calculate the number of pages.
    if ($num_records > $display) { // More than 1 page.
       $num_pages = ceil ($num_records/$display);
    } else {
       $num_pages = 1;
    }

} // End of np IF.

// Determine where in the database to start returning results.
if (isset($_GET['s'])) {
    $start = $_GET['s'];
} else {
    $start = 0;
}

// Default column links.
$link1 = "{$_SERVER['PHP_SELF']}?sort=lna";
$link2 = "{$_SERVER['PHP_SELF']}?sort=fna";
$link3 = "{$_SERVER['PHP_SELF']}?sort=dra";

// Determine the sorting order.
if (isset($_GET['sort'])) {

    // Use existing sorting order.
    switch ($_GET['sort']) {
       case 'lna':
          $order_by = 'last_name ASC';
          $link1 = "{$_SERVER['PHP_SELF']}?sort=lnd";
          break;
       case 'lnd':
          $order_by = 'last_name DESC';
          $link1 = "{$_SERVER['PHP_SELF']}?sort=lna";
          break;
       case 'fna':
          $order_by = 'first_name ASC';
          $link2 = "{$_SERVER['PHP_SELF']}?sort=fnd";
          break;
       case 'fnd':
          $order_by = 'first_name DESC';
          $link2 = "{$_SERVER['PHP_SELF']}?sort=fna";
          break;
       case 'dra':
          $order_by = 'registration_date ASC';
          $link3 = "{$_SERVER['PHP_SELF']}?sort=drd";
          break;
       case 'drd':
          $order_by = 'registration_date DESC';
          $link3 = "{$_SERVER['PHP_SELF']}?sort=dra";
          break;
       default:
          $order_by = 'registration_date DESC';
          break;
    }

    // $sort will be appended to the pagination links.
    $sort = $_GET['sort'];

} else { // Use the default sorting order.
    $order_by = 'registration_date ASC';
    $sort = 'drd';
}

// Make the query.
$query = "SELECT last_name, first_name,
    DATE_FORMAT(registration_date, '%M %d, %Y') AS dr, user_id FROM users ORDER BY
    $order_by LIMIT $start, $display";
$result = @mysql_query ($query); // Run the query.

// Table header.
echo '<table align="center" cellspacing="0" cellpadding="5">
<tr>
    <td align="left"><b>Edit</b></td>
    <td align="left"><b>Delete</b></td>
    <td align="left"><b><a href="' . $link1 . '">Last Name</a></b></td>
    <td align="left"><b><a href="' . $link2 . '">First Name</a></b></td>
    <td align="left"><b><a href="' . $link3 . '">Date Registered</a></b></td>
</tr>
';

// Fetch and print all the records.
$bg = '#eeeeee'; // Set the background color.
while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
    $bg = ($bg=='#eeeeee' ? '#ffffff' : '#eeeeee'); // Switch the background color.  
    echo '<tr bgcolor="' . $bg . '">
       <td align="left"><a href="edit_user.php?id=' .
         $row['user_id'] . '">Edit</a></td>
       <td align="left"><a href="delete_user.php?id=' .
         $row['user_id'] . '">Delete</a></td>
       <td align="left">' . $row['last_name'] . '</td>
       <td align="left">' . $row['first_name'] . '</td>
       <td align="left">' . $row['dr'] . '</td>
    </tr>
    ';
}

echo '</table>';

mysql_free_result ($result); // Free up the resources.

mysql_close(); // Close the database connection.

// Make the links to other pages, if necessary.
if ($num_pages > 1) {

    echo '<br /><p>';
    // Determine what page the script is on.
    $current_page = ($start/$display) + 1;

    // If it's not the first page, make a Previous button.
    if ($current_page != 1) {
       echo '<a href="view_users.php?s=' . ($start - $display) . '&np=' .
         $num_pages . '&sort=' . $sort .'">Previous</a> ';  
    }

    // Make all the numbered pages.
    for ($i = 1; $i <= $num_pages; $i++) {
       if ($i != $current_page) {
          echo '<a href="view_users.php?s=' . (($display * ($i - 1))) .
            '&np=' . $num_pages . '&sort=' . $sort .'">' . $i . '</a> ';  
       } else {
          echo $i . ' ';
       }
    }

    // If it's not the last page, make a Next button.
    if ($current_page != $num_pages) {
       echo '<a href="view_users.php?s=' . ($start + $display) . '&np=' .
         $num_pages . '&sort=' . $sort .'">Next</a> ';  
    }

    echo '</p>';

} // End of links section.

include ('./includes/footer.html'); // Include the HTML footer.
?>
