<?php

	include 'dblogin.php';


	$data = R::getAll('SELECT * FROM `users`');
	print_r($data);
?>
