<?php
include 'inc/function.php';
include 'inc/conf.php';

$action = "";
$nom  = "";
$parent = "";
$query = $channel -> prepare('SELECT * FROM `Categorie`');
$result = $query -> execute();
$categorie = $query-> fetchAll();


?>

<!DOCTYPE html>
<html>
	<?php include 'inc/head.php' ?>
	<body>
		<!--HEADER-->
		<?php include 'inc/header.php' ?>
		<!--MAIN CONTENT-->
		<main>
			<div class="contener listeTache">

			<?php include 'inc/liste_de_tache.php'?>

		</div>
			<aside class="contener">
				<?php include 'inc/formulaire_cat.php' ?>
				<?php include 'inc/formulaire.php' ?>

			</aside>
		</main>
		<!--FOOTER-->
		<?php  include 'inc/footer.php' ?>
		<script type="text/javascript" src="js/main.js"/>
	</body>


	</script>
</html>
