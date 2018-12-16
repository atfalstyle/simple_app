<?php

	# Page For Action Add User
	require_once('../../config/config.php');
    $nama = trim($_POST['nama']);
    $username = trim($_POST['username']);
    $password = trim($_POST['password']);
    $passMD5 = md5($password);
    $email = trim($_POST['email']);

    if(!empty($nama) and !empty($username) and !empty($password) and !empty($email)){
      	$queryInsert = $conn->prepare("INSERT INTO tabel_user (nama,email,username,password) VALUES (:nama,:email,:username,:passMD5)");
      	$queryInsert->bindParam(":nama", $nama);
      	$queryInsert->bindParam(":email", $email);
      	$queryInsert->bindParam(":username", $username);
      	$queryInsert->bindParam(":passMD5", $passMD5);
      	$queryInsert->execute();
      	if($queryInsert) {
      		echo "Success";
	   	} else {
	    	echo "Failed!";
	    }
    }
	