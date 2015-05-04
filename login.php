<?php
	include 'dblogin.php';
        $user = R::dispense( 'users' );
        $user->username = "ross";
        $user->password = "password";
        R::store( $user );

?>
