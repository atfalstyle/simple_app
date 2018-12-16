<?php

	require_once('../../config/config.php');
 	$nama = trim($_POST['nama']);
  	$username = trim($_POST['username']);
  	$password = trim($_POST['password']);
  	$passMD5 = $passMD5 = md5($password);
  	$email = trim($_POST['email']);
  	$id = trim($_POST['id']);


  	if(!empty($nama) and !empty($username) and !empty($email)){
      	if(empty($password)){
	    	$queryInsert = $conn->prepare("UPDATE tabel_user SET nama=:nama, email=:email, username=:username WHERE id =:id");
	      	$queryInsert->bindParam(":nama", $nama);
	      	$queryInsert->bindParam(":email", $email);
	      	$queryInsert->bindParam(":username", $username);
	      	$queryInsert->bindParam(":id", $id);
	      	$queryInsert->execute();
	      	if($queryInsert) {
	      		echo "Success";
		   	} else {
		    	echo "Failed!";
		    }
		} else {
	    	$queryInsert = $conn->prepare("UPDATE tabel_user SET nama=:nama, email=:email, username=:username, password=:passMD5 WHERE id =:id");
	      	$queryInsert->bindParam(":nama", $nama);
	      	$queryInsert->bindParam(":email", $email);
	      	$queryInsert->bindParam(":username", $username);
	      	$queryInsert->bindParam(":passMD5", $passMD5);
	      	$queryInsert->bindParam(":id", $id);
	      	$queryInsert->execute();
	      	if($queryInsert) {
	      		echo "Success";
		   	} else {
		    	echo "Failed!";
		    }
	  	}
  	}