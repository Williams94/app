<?php
include 'dblogin.php';

$action = $_POST['action'];

if ($action == "info") {
    session_start();
    $id = $_SESSION["signedIn"];
    $user = R::load('users', $id);
    echo $user;
}
