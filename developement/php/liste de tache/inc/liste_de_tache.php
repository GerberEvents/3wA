<section>
  <h2>Les Tâche du Jour</h2>
  <?php
  $reponse = file_get_contents('donnee.json');
  $reponse = json_decode($reponse);
  if (is_null($reponse)) {
    echo 'y a rien';
  } else {
    $id = -1;

  foreach ($reponse as $key) {
    $id++;
  ?>
  <article class="tache">
    <header>
      <div>
      <h3>Tâche : <?php echo ($key->titre) ?></h3>
      <p>A Faire : <?php echo ($key->toDo) ?></p>
      <p>Catégories : <?php echo ($key->categories) ?></p>
      <p>Deadline : <?php echo ($key->deadline) ?></p>
      </div>
      <div>
        <p><i class="fa fa-exclamation-triangle" style="color:<?php echo ($key->impoTache) ?>" aria-hidden="true"></i></p>
      </div>
    </header>
    <nav>
        <button class="button toggle-modif">
          <i class="fa fa-cogs" aria-hidden="true"></i>
        </button>
      <form  class="" action="suprimer.php" method="post">
        <input class="idNumber" name="idNumber" value= '<?php echo(strval($id))?>'>
        <button  class="button" type="submit" value="suprimer">
          <i class="fa fa-trash" aria-hidden="true"></i>
        </button>
      </form>
    </nav>
    <footer class="block">
      <form class="" action="modifier.php" method="post">
        <label for="titre">Titre :</label>
        <input type="text" name="titre" value="<?php echo ($key->titre) ?>">
        <label for="toDo">To Do :</label>
        <input type="text" rows="50" cols="30" name="toDo" value="<?php echo ($key->toDo) ?>"></textarea>
        <label for="categories">Catégorie de la tache :</label>
          <select name="categories" id="categories">
            <option value="<?php echo ($key->categories) ?>">bug</option>
             <option value="Bug <i class='fa fa-bug' aria-hidden='true'></i>">bug</option>
             <option value="Code <i class='fa fa-code' aria-hidden='true'></i>">Code</option>
             <option value="Debugage <i class='fa fa-bullhorn' aria-hidden='true'></i>">Debugage</option>
             <option value="Pause <i class='fa fa-coffee' aria-hidden='true'></i>">Pause</option>
         </select><br>
        <label for="deadline">Dead Line</label>
        <input type="date" name="deadline" value="<?php echo ($key->deadline) ?>">
        <label for="impoTache">Importance de la tache</label>
        <input type="color" name="impoTache"  value="<?php echo ($key->impoTache) ?>">
        <br><br>
        <button class="button" type="submit" name="Envoyer">
          <i class="fa fa-paper-plane" aria-hidden="true"></i>
        </button>
        <button class="button" type="reset" name="Annuler">
          <i class="fa fa-refresh" aria-hidden="true"></i>
        </button>
      </form>
    </footer>
  </article>
  <?php
 }
  }
   ?>
</section>
