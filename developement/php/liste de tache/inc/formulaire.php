<div class="asideFormumlaire">
<h3>Crée une tâche</h3>
<form class="" action="liste_de_tache.php" method="post">
  <label for="titre">Titre :</label>
  <input type="text" name="titre" value="">
  <label for="toDo">To Do :</label>
  <input type="text" rows="50" cols="30" name="toDo" value=""></textarea>
  <label for="categories">Catégorie de la tache :</label>
    <select name="categories" id="categories">
       <option value="Bug <i class='fa fa-bug' aria-hidden='true'></i>">bug</option>
       <option value="Code <i class='fa fa-code' aria-hidden='true'></i>">Code</option>
       <option value="Debugage <i class='fa fa-bullhorn' aria-hidden='true'></i>">Debugage</option>
       <option value="Pause <i class='fa fa-coffee' aria-hidden='true'></i>">Pause</option>
   </select><br>
  <label for="deadline">Dead Line</label>
  <input type="date" name="deadline" value="">
  <label for="impoTache">Importance de la tache</label>
  <input type="color" name="impoTache"  value="#fff">
  <br><br>
  <button class="button" type="submit" name="Envoyer">
    <i class="fa fa-paper-plane" aria-hidden="true"></i>
  </button>
  <button class="button" type="reset" name="Annuler">
    <i class="fa fa-refresh" aria-hidden="true"></i>
  </button>
</form>
</div>
