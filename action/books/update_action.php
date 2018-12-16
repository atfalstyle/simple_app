<?php

	require_once('../../config/config.php');
 	$judul = trim($_POST['judul']);
    $pengarang = trim($_POST['pengarang']);
    $penerbit = trim($_POST['penerbit']);
    $kategori = trim($_POST['kategori']);
  	$id = trim($_POST['id']);


  	if(!empty($judul) and !empty($pengarang) and !empty($penerbit) and !empty($kategori)){
    	$queryInsert = $conn->prepare("UPDATE tabel_buku SET judul_buku=:judul, pengarang=:pengarang, penerbit=:penerbit, kategori=:kategori WHERE id =:id");
	    $queryInsert->bindParam(":judul", $judul);
	    $queryInsert->bindParam(":pengarang", $pengarang);
	    $queryInsert->bindParam(":penerbit", $penerbit);
	    $queryInsert->bindParam(":kategori", $kategori);
	    $queryInsert->bindParam(":id", $id);
	    $queryInsert->execute();
	    if($queryInsert) {
	      echo "Success";
	    } else {
	      echo "Failed!";
	    }
  	}