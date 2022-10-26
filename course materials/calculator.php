 <?php # calculator.php
$page_title = 'Widget Cost Calculator';
include ('./includes/header.html');

/* This function calculates a total
and then prints the results. */
function calculate_total ($qty, $cost, $tax) {

    $taxrate = $tax / 100; // Turn 5% into .05.
    $total = ($qty * $cost) * ($taxrate + 1);
    echo '<p>The total cost of purchasing ' . $qty . '
        widget(s) at $' . number_format 
        ($cost, 2) . ' each, including a tax rate
        of ' . $tax . '%, is $' . number_format
        ($total, 2) . '.</p>';

} // End of function.

// Check if the form has been submitted.
if (isset($_POST['submitted'])) {

    // Minimal form validation.
    if ( is_numeric($_POST['quantity']) && is_numeric($_POST['price']) && 
        is_numeric($_POST['tax']) ) {

        // Calculate the results.
        $taxrate = $_POST['tax'] / 100; // Turn 5% into .05.
        $total = ($_POST['quantity'] * $_POST['price']) * ($taxrate + 1);

        // Print the heading.
        echo '<h1 id="mainhead">Total Cost</h1>';

        // Call the function.
        calculate_total ($_POST['quantity'], $_POST['price'], $_POST['tax']);

        // Print some spacing.
        echo '<p><br /></p>';

    } else { // Invalid submitted values.
        echo '<h1 id="mainhead">Error!</h1>
        <p class="error">Please enter a valid quantity, price, and 
        tax.</p><p><br /></p>';
    }


} // End of main isset() IF.

// Leave the PHP section and create the HTML form.
?>
<h2>Widget Cost Calculator</h2>
<form action="calculator.php" method="post">
    <p>Quantity: <input type="text" name="quantity" 
        size="5" maxlength="10" value="<?php if
        (isset($_POST['quantity'])) echo $_POST['quantity']; 
        ?>" /></p>
    <p>Price: <input type="text" name="price" 
        size="5" maxlength="10" value="<?php if
        (isset($_POST['price'])) echo $_POST['price']; 
        ?>" /></p>
    <p>Tax (%): <input type="text" name="tax" 
        size="5" maxlength="10" value="<?php if
        (isset($_POST['tax'])) echo $_POST['tax']; 
        ?>" /></p>
    <p><input type="submit" name="submit" 
        value="Calculate!" /></p>
    <input type="hidden" name="submitted" value="TRUE" />
</form>

<?php
include ('./includes/footer.html');
?> 
