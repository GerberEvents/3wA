<div class="asideFormumlaire">
<h3>Crée une catégorie</h3>
<form class="" action="<?=$action?>" method="post">
  <input type="text" name="" value="<?=$nom?>">
  <select class="" name="parent">
    <?php
      foreach ($categorie as $C) {?>
      <option value='<?= $C["id"]?>'>
        <?= $C['nom']?>
      </option>
      <?php } ?>
  </select>
  <br><br>
  <button class="button" type="submit" name="Envoyer">
    <i class="fa fa-paper-plane" aria-hidden="true"></i>
  </button>
  <button class="button" type="reset" name="Annuler">
    <i class="fa fa-refresh" aria-hidden="true"></i>
  </button>
</form>
</div>
