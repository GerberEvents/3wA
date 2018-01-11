<?php
include 'inc/function.php';
include 'inc/conf.php';

$action = "";
$nom  = "";
$parent = "";
$query = $channel -> prepare('SELECT * FROM `Categorie`');
$result = $query -> execute();
$categorie = $query-> fetchAll();

include 'index.php';

?>
