<?php
    require_once('../../config/database.php');
    $table = 'tabel_buku';
    $primaryKey = 'id';
    $columns = array(
        array( 'db' => 'id','dt' => 0 ),
        array( 'db' => 'judul_buku','dt' => 1 ),
        array( 'db' => 'pengarang','dt' => 2 ),
        array( 'db' => 'penerbit','dt' => 3 ),
        array( 'db' => 'kategori', 'dt' => 4 ),
        array( 'db' => 'id', 'dt' => 5 ),
    );
     
    $sql_details = array(
        'user' => DB_USER,
        'pass' => DB_PASS,
        'db'   => DB_NAME,
        'host' => DB_HOST
    );
    require('../../action/ssp.class.php');
    echo json_encode(
        SSP::simple( $_GET, $sql_details, $table, $primaryKey, $columns )
    );