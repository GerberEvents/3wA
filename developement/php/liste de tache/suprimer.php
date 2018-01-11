<?php

function ft_suprimDonnee($json,$idtache)
{
	$json = json_decode($json);
	foreach ($json as $key)
  {
  	if($key->id == $idtache )
    {
  		array_splice($json, $idtache, 1);
      break;
    }
	}
	$x = -1;
	foreach ($json as $key)
	{
		$x++;
		$key->id = $x;
	}
  $json = json_encode($json);
  return $json;
}

$json = file_get_contents('donnee.json');
$idtache = $_POST['idNumber'];
$json = ft_suprimDonnee($json,$idtache);
file_put_contents('donnee.json', $json);

include 'index.php';

?>
