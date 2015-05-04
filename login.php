<?php
	include 'dblogin.php';
	session_start();
	$action = $_POST['action'];
	$username = $_POST['name'];
	$password = $_POST['password'];

if ($action == "login"){

	$user = R::findAll( 'users' );


	foreach($user as $u){

		if($u['username'] == $username && $u['password'] == $password ){
			print_r($u['username']." ");
			$_SESSION["signedIn"] = $u['id']." ".$u['username'];
			$bool = true;
		}
		else {
			$bool = false;
		}
	}
	echo $bool;

}

if ($action == "register" && $username != NULL){

	$user = R::dispense( 'users' );
	$user->username = $username;
	$user->password = $password;
	$id = R::store($user);
	$newUser = R::load('users',$id);
	$_SESSION["signedIn"] = $newUser['id']." ".$newUser['username'];
	echo $newUser;

}
