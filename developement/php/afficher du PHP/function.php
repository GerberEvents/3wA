<?php

  function ft_connectDB(){
    $dsn = 'mysql:host=localhost;dbname=classicmodels' ;
    $id =  'root';
    $root =  'troiswa' ;
    return new PDO($dsn, $id ,$root);
  }


 ?>
