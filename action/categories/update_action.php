<?php

	require_once('../../config/config.php');
 	$nama = trim($_POST['nama']);
  	$id = trim($_POST['id']);


  	if(!empty($nama)){
    	$queryInsert = $conn->prepare("UPDATE tabel_kategori SET nama=:nama WHERE id =:id");
      	$queryInsert->bindParam(":nama", $nama);
      	$queryInsert->bindParam(":id", $id);
      	$queryInsert->execute();
      	if($queryInsert) {
      		echo "Success";
	   	} else {
	    	echo "Failed!";
	    }
  	}