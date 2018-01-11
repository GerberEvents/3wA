<?php
  include 'function.php';
  include 'conf.php';

  $query = $channel-> prepare("SELECT `orderNumber`, `orderDate`, `customerName`, `requiredDate`, `status` FROM `orders` AS O INNER JOIN `customers` AS C ON C.`customerNumber`= O.`customerNumber`");

  $result = $query-> execute();

  $lines = $query-> fetchall(PDO::FETCH_ASSOC);


  include 'order_form.phtml';

?>
