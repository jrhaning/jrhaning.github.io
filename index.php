<?php
    $fname = filter_input($INPUT_POST, 'firstname');
    $lname = filter_input($INPUT_POST,'lastname');
    $email = filter_input($INPUT_POST,'email');
    $message = filter_input($INPUT_POST,'message');
    $from = 'From: Portfolio Site';
    $to = 'jrhaning@lcmail.lcsc.edu';
    $subject = 'Hello';

    $body = "From: $fname .$lname\n E-Mail: $email\n Message:\n $message";
    

    if ($INPUT_POST,'submit') {
        if (mail ($to, $subject, $body, $from)) { 
            echo '<p>Your message has been sent!</p>';
        } else { 
            echo '<p>Something went wrong, go back and try again!</p>'; 
        }
    }
?>