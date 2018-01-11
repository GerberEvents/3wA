<body>
  <!--HEADER-->
  <header>
    <h1> Traducteur </h1>
    <form action="index.php" method="post">
    <section class="conteneur">
      <span class="custom-dropdown custom-dropdown--white">
        <select  name="choix1" class="custom-dropdown__select custom-dropdown__select--white">
            <option value="<?php  echo $op1 ?>"> <?php  echo $op1 ?></option>
            <option value="<?php echo $op2 ?>"> <?php echo $op2 ?></option>
        </select>
      </span>
      <span class="custom-dropdown custom-dropdown--white">
          <select name="choix2" class="custom-dropdown__select custom-dropdown__select--white">
              <option value="<?php echo $op2 ?>"><?php echo $op2?></option>
              <option value="<?php echo $op1?>" ><?php echo $op1?></option>
          </select>
      </span>
    </section>
    <nav>
    </nav>
  </header>
  <!--MAIN CONTENT-->
  <main>
<?php echo $postBloc2 ?>
        <section class="conteneur">

          <textarea name="bloc1" rows="8" cols="45" placeholder="Votre message ici."><?php
          echo $postBloc1
          ?></textarea>
        </section>
        <section>
          <textarea name="bloc2" rows="8" cols="45" placeholder="Votre message ici."><?php
          echo $traduction
          ?></textarea>
        </section>
        <section>
          <input type="submit" value="Valider"/>
        </section>
  </form>
    <section class="console">
      <h2> Le foreach </h2>
      <?php
      foreach ($tableau as $key => $value)
      {
        echo "<p> la traduction de $key est $value </p>";
      }
      ?>
    </section>
    <section class="console">
      <h2> Console PHP de testing </h2>
      <p> <?php var_dump($tableau)?></p>
    </section>
  </main>
  <!--FOOTER-->
  <footer>
  </footer>
</body>
