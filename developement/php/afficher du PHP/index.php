<?php

  include 'function.php';
  include 'conf.php';

  $query = $channel-> prepare("SELECT `orderNumber`, `orderDate`, `customerName`, `requiredDate`, `status` FROM `orders` AS O INNER JOIN `customers` AS C ON C.`customerNumber`= O.`customerNumber`");

  $result = $query-> execute();

  $lines = $query-> fetchall(PDO::FETCH_ASSOC);



  $query1 = $channel-> prepare("SELECT `productName` FROM `products` WHERE 1");

  $result1 = $query1-> execute();

  $lines1 = $query1-> fetchall(PDO::FETCH_ASSOC);


  include 'index.phtml';
?>
