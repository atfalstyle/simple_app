<?php 

	$hlm='';
	if (isset($_GET['hal'])) {
		$hlm=$_GET['hal'];
	}

	$current_page=$hlm;

	switch ($hlm) {
		
		case '':
			$hlm = "include 'pages/dashboard.php';";
			break;

		case 'dashboard':
			$hlm = "include 'pages/dashboard.php';";
			break;

		case 'users':
			$hlm = "include 'pages/users/users.php';";
			break;

		case 'books':
			$hlm = "include 'pages/books/books.php';";
			break;

		case 'categories':
			$hlm = "include 'pages/categories/categories.php';";
			break;
	}

	$content=$hlm;

 ?>