<?php
if (!empty($_POST)) {
	ft_ajoutDonnee($_POST);
}

function ft_ajoutDonnee(array $array)
{
	$donnee = new stdClass;
	$donnee->titre = $array['titre'];
	$donnee->toDo = $array['toDo'];
	$donnee->categories = $array['categories'];
	$donnee->deadline = $array['deadline'];
	$donnee->impoTache = $array['impoTache'];

	$fichier =[];
		if (!is_file('donnee.json') || file_get_contents("donnee.json") == 'null')
	 		{
		   $donnee->id = '0';
		   array_push($fichier,$donnee);
		   $fichier = json_encode($fichier);
		   file_put_contents('donnee.json',$fichier);
	 		}
	 		else
	 		{
		   $fichier = file_get_contents('donnee.json');
		   $fichier = json_decode($fichier);
		   $donnee->id = ft_getId($fichier);
		   array_push($fichier,$donnee);
		   $fichier = json_encode($fichier);
		   file_put_contents('donnee.json',$fichier);
	 		}
}

function ft_getId($fichier) : string
{
	$x = -1;
	foreach($fichier as $item)
	{
		$x = $item->id;
	}
  $x = $x+1;
	return(strval($x));
}

 ?>
