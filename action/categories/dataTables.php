<?php
    require_once('../../config/database.php');
    $table = 'tabel_kategori';
    $primaryKey = 'id';
    $columns = array(
        array( 'db' => 'id','dt' => 0 ),
        array( 'db' => 'nama','dt' => 1 ),
        array( 'db' => 'id', 'dt' => 2 ),
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