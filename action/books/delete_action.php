<?php
   	
   	if(isset($_GET['id'])){
   		include('../../config/config.php');
   		$id = $_GET['id'];
   		$query = $conn->prepare("DELETE FROM tabel_buku WHERE id=:id");
   		$query->bindParam(":id", $_GET['id']);
   		$query->execute();
   		if($query) {
      		echo "Success";
	   	} else {
	    	echo "Failed!";
	    } 
  	}
	
  	