<?php

    $name = $_POST['name'];
    $email = $_POST['email'];
    $comments = $_POST['comments'];
    
    $msg = $name . "\n" . $email . "\n" . $comments;
/*    
    $s= mail("yousefegy94@yahoo.com","My Wesite",$msg);
    if(!$s){
        $errorMessage = error_get_last()['message'];
    }
    else{
        echo "nice";
    }
    print_r(error_get_last());
    //header('Location: index.php#contact');*/

    $headers = "Content-Type: text/html; charset=UTF-8";
    $to='yousef@youssef.gq';
    $subject= $email;
    $body= $msg;
    if(mail($to,$subject,$body,$headers)){
        header('Location: index.php#contact');
    } else {
        mail($to,'error',$body,$headers);
    }
 

?>