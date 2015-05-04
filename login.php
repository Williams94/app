<?php
	$sqlconn = mysqli_connect('178.62.75.76', 'buildax', 'Skinks94','buildax') or die(mysqli_error());

	$dataquery = mysqli_query($sqlconn, "SELECT * FROM users");

	$arr = array();
	while($r = mysqli_fetch_object($dataquery)){
		array_push($arr, array("ID" => $r->ID, "username" => $r->username));
	}
	
	print_r(json_encode($arr);
?>