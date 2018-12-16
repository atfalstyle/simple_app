<?php

	# Page For Action Add User
	require_once('../../config/config.php');
    $nama = trim($_POST['nama']);

    if(!empty($nama)){
      	$queryInsert = $conn->prepare("INSERT INTO tabel_kategori (nama) VALUES (:nama)");
      	$queryInsert->bindParam(":nama", $nama);
      	$queryInsert->execute();
      	if($queryInsert) {
      		echo "Success";
  	   	} else {
  	    	echo "Failed!";
  	    }
    }
	