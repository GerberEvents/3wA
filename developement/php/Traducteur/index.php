<?php

/* VARIABLE */
$postChoix1 = $_POST['choix1'];
$postChoix2 = $_POST['choix2'];
$postBloc1 = $_POST['bloc1'];
$postBloc2 = $_POST['bloc2'];

$op1 = "Français";
$op2 = "Anglais";
$vide = "Tu es con ta rien mis";
$textDefaultFr = "Traduction...";
$textDefaultEn = "Translate...";



/*TABLEAU*/
$traduction = "";
$dico = [
  "dog" => "chien",
  "cat" => "chat",
  "car" => "voiture",
  "man" => "homme",
];

$tableau["woman"] = "femme";
/*Function*/


/* code general*/

if (!empty($_POST))
{
  if ($postChoix1 == $op1)
  {
    $dico = array_flip($dico);
  }
  if (array_key_exists($postBloc1,$dico))
  {
    $traduction = $dico [$postBloc2];
  }
  else
  {
    $traduction = 'Erro';
  }
}


include 'inc/head.html.php';
include 'inc/body.html.php';
include 'inc/footer.html.php';

?>
