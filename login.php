<?php
	include 'dblogin.php';
        $user = R::dispense( 'users' );
        $user->username = "ross";
	$user->password = "password";
	$id = R::store( $book );
	$user1 = R::load( 'user', $id);
	echo $user1
?>
