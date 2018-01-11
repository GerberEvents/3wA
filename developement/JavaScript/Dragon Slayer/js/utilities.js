'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* *********************************** FONCTIONS UTILITAIRES *********************************** */
/*************************************************************************************************/

function ft_getRandomInteger (min, max)
{
  var generate = (Math.floor(Math.random()* max) + min)
  console.log("nombre aléaoire généré ="+generate)
  return (generate);
}
