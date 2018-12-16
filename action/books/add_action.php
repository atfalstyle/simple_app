<?php

	# Page For Action Add Book
	require_once('../../config/config.php');
  $judul = trim($_POST['judul']);
  $pengarang = trim($_POST['pengarang']);
  $penerbit = trim($_POST['penerbit']);
  $kategori = trim($_POST['kategori']);

  if(!empty($judul) and !empty($pengarang) and !empty($penerbit) and !empty($kategori)){
    $queryInsert = $conn->prepare("INSERT INTO tabel_buku(judul_buku, pengarang, penerbit, kategori) VALUES(:judul, :pengarang, :penerbit, :kategori)");
    $queryInsert->bindParam(":judul", $judul);
    $queryInsert->bindParam(":pengarang", $pengarang);
    $queryInsert->bindParam(":penerbit", $penerbit);
    $queryInsert->bindParam(":kategori", $kategori);
    $queryInsert->execute();
    if($queryInsert) {
      echo "Success";
    } else {
      echo "Failed!";
    }
  }
	