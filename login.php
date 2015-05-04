<?php
	include 'dblogin.php';
	$user = R::dispense('users');
        $user->username = "ross";
        $user->password = "password";
	$id = R::store($user);
?>
