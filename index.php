<?php
    $fname = $_POST['firstname'];
    $lname = $_POST['lastname']
    $email = $_POST['email'];
    $message = $_POST['message'];
    $from = 'From: Portfolio Site';
    $to = 'jrhaning@lcmail.lcsc.edu';
    $subject = 'Hello';

    $body = "From: $fname .$lname\n E-Mail: $email\n Message:\n $message";
    

    if ($_POST['submit']) {
        if (mail ($to, $subject, $body, $from)) { 
            echo '<p>Your message has been sent!</p>';
        } else { 
            echo '<p>Something went wrong, go back and try again!</p>'; 
        }
    }
?>