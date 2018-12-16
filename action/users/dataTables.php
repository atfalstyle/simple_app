<?php
    require_once('../../config/database.php');
    $table = 'tabel_user';
    $primaryKey = 'id';
    $columns = array(
        array( 'db' => 'id','dt' => 0 ),
        array( 'db' => 'nama','dt' => 1 ),
        array( 'db' => 'email','dt' => 2 ),
        array( 'db' => 'username','dt' => 3 ),
        array( 'db' => 'password', 'dt' => 4 ),
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