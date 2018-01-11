'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* **************************************** DONNEES JEU **************************************** */
/*************************************************************************************************/

document.getElementById('fight').addEventListener('click', ft_start);

document.getElementsByName('armor')[0].addEventListener('click', ft_armor);
document.getElementsByName('armor')[1].addEventListener('click', ft_armor);
document.getElementsByName('armor')[2].addEventListener('click', ft_armor);

document.getElementsByName('weapon')[0].addEventListener('click', ft_weapon);
document.getElementsByName('weapon')[1].addEventListener('click', ft_weapon);
document.getElementsByName('weapon')[2].addEventListener('click', ft_weapon);

document.getElementsByName('difficulty')[0].addEventListener('click', ft_difficulty);
document.getElementsByName('difficulty')[1].addEventListener('click', ft_difficulty);
document.getElementsByName('difficulty')[2].addEventListener('click', ft_difficulty);

document.getElementById('turnEnd').addEventListener('click', ft_newTurn);

var player = {
"pv":100,
"defense": undefined,
"attack": undefined,
"bonusDefense": 0,
"bonusAttack": 0
}
console.log(player);

var drake = {
"pv":50,
"defense": 5,
"attack": 15,
"bonusDefense": 0,
"bonusAttack": 0
}
console.log(drake);

/*************************************************************************************************/
/* *************************************** FONCTIONS JEU *************************************** */
/*************************************************************************************************/

function ft_armor(armorChoice)
{

	if (document.getElementsByName('armor')[0].checked == true)
	{
		player.defense = 5;
	}
	else if (document.getElementsByName('armor')[1].checked == true)
	{
		player.defense = 10;
	}
	else
	{
		player.defense = 15;
	}
	return (player.defense)
}

function ft_weapon (weaponChoice)
{
	if (document.getElementsByName('weapon')[0].checked == true)
	{
		player.attack = 10;
	}
	else if (document.getElementsByName('weapon')[1].checked == true)
	{
		player.attack = 15;
	}
	else
	{
		player.attack = 18;
	}
	return (player.attack);
}

function ft_difficulty (diccultyChoice)
{
	if (document.getElementsByName('difficulty')[0].checked == true)
	{
		drake.pv = 100;
		drake.defense = 10;
		drake.attack = 10;
	}
	else if (document.getElementsByName('difficulty')[1].checked == true)
	{
		drake.pv = 150;
		drake.defense = 10;
		drake.attack = 15;
	}
	else if (document.getElementsByName('difficulty')[2].checked == true)
	{
		drake.pv = 200;
		drake.defense = 10;
		drake.attack = 20;
	}
	return (drake);
}
/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/

function ft_start ()
{
  document.getElementById('hide').id = "show";
  ft_dragon_slayer()
}

function ft_dragon_slayer ()
{
  // Actualise les données pv des deux combattants dans la console //
  if (drake.pv > 0 && player.pv > 0)
  {
	   document.getElementById('console').value = "A vous de jouer ! Il vous reste "+ player.pv+" points de vie. Le dragon a "+drake.pv+" points de vie";
     drake.bonusDefense = 0;
     console.log(player);
     console.log(drake);
   }
   else
   {
     if (player.pv <= 0)
     {
        document.getElementById('console').value = "Vous êtes mort ! C'est dommage !";
     }
     else
     {
        document.getElementById('console').value = "Vous avez vaincu le dragon ! Bravo !";
     }
   }
}

function ft_newTurn()
{
  ft_playerChoice();
  ft_drake_action();
  ft_dragon_slayer();
}

function ft_drake_action ()
{
	var drakeAction;
	drakeAction = ft_getRandomInteger(0, 2)
	if (drakeAction == 0)
	{
		ft_drakeAttack()
	}
	else if (drakeAction == 1)

	{
		ft_drakeBigAttack()
	}
	else
	{
		ft_drakeDefense()
	}
}

/* random Atack player */

function ft_RandomPlayer_action ()
{
  var action;
  action = ft_getRandomInteger(0, 2);
	if (action == 0)
	{
		ft_playerAttack();
	}
	else if (action == 1)
	{
		ft_playerBigAttack();
    ft_playerAttack();
	}
	else if (action == 2)
	{
		ft_playerDefense();
	}
}

function ft_playerChoice ()
{
    document.getElementsByName('playerAction')[0].disabled;
    document.getElementsByName('playerAction')[1].disabled;
    document.getElementsByName('playerAction')[2].disabled;
    if (document.getElementsByName('playerAction')[0].checked == true)
    {
      ft_playerAttack()
    }
    else if(document.getElementsByName('playerAction')[1].checked == true)
    {
      ft_playerBigAttack()
      ft_playerAttack()
    }
    else if(document.getElementsByName('playerAction')[2].checked == true)
    {
      ft_playerDefense()
    }
    else
    {
        ft_RandomPlayer_action()
    }
    document.getElementsByName('playerAction')[0].unchecked;
  	document.getElementsByName('playerAction')[1].unchecked;
  	document.getElementsByName('playerAction')[2].unchecked;
  	document.getElementsByName('playerAction')[0].enabled;
  	document.getElementsByName('playerAction')[1].enabled;
  	document.getElementsByName('playerAction')[2].enabled;
}

function ft_playerAttack ()
{
	drake.pv = drake.pv - ((player.attack + player.bonusAttack) - (drake.defense + drake.bonusDefense));
  if (player.bonusAttack !=0)
  {
    player.bonusAttack = 0;
  }

  if (player.bonusDefense != 0)
  {
    player.bonusDefense = 0;
  }

  ft_dragon_slayer();
}

function ft_playerBigAttack ()
{
  var bonusAttack = ft_getRandomInteger(1, 4);
  player.bonusAttack = bonusAttack;
}

function ft_playerDefense ()
{
	player.bonusDefense = ft_getRandomInteger(1, 4);
}

function ft_drakeAttack ()
{
	player.pv = player.pv - ((drake.attack + drake.bonusAttack) - (player.defense + player.bonusDefense));
  if (drake.bonusAttack !=0)
  {
    drake.bonusAttack = 0;
  }

  if (drake.bonusDefense != 0)
  {
    drake.bonusDefense = 0;
  }
}

function ft_drakeBigAttack ()
{
  drake.bonusAttack = ft_getRandomInteger(1, 4);
}

function ft_drakeDefense ()
{
	drake.bonusDefense = ft_getRandomInteger(1, 4);
}
