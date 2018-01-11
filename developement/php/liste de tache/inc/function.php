<?php

  function ft_connectDB(){
    $dsn = 'mysql:host=localhost;dbname=liste_de_tache' ;
    $id =  'root';
    $root =  'troiswa' ;
    return new PDO($dsn, $id ,$root);
  }


 ?>
