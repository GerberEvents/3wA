'use strict';   // Mode strict du JavaScript


var toolbarToggle = document.querySelector('#toolbar-toggle');
var toolbar =  document.querySelector('.toolbar');

var box = document.querySelector('#slider');
var next = document.querySelector('#slider-next');
var sliderPlay = document.querySelector('#slider-play')
var sliderStop = document.querySelector('#slider-stop')
var prev = document.querySelector('#slider-previous');
var ramd = document.querySelector('#slider-random');
var image = document.querySelector('#slider');
var fig = document.querySelector('#fig');
var etat = 0;
var timer;
var imageArray = ['images/1.jpg','images/2.jpg','images/3.jpg','images/4.jpg','images/5.jpg','images/6.jpg'];

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/
toolbarToggle.addEventListener("click",ft_afficher_cacher);
next.addEventListener('click',ft_next);
sliderPlay.addEventListener('click',ft_timing)
sliderStop.addEventListener('click',ft_autoStop)
prev.addEventListener('click',ft_prev);
ramd.addEventListener('click',ft_ramdom);

/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/
function ft_afficher_cacher(id)
  {
    toolbar.classList.toggle('cacher');
    console.log('cacher')
  }

function ft_affichagePhoto()
  {
    image.src = imageArray[etat]
  }

function ft_autoPlay()
  {
    ft_affichagePhoto();
    if(etat >= imageArray.length -1)
    {
      console.log(etat);
      etat = 0
    }else {
      etat ++
    }
  }

function ft_timing()
{
  if (timer == undefined)
  {
    timer = window.setInterval(ft_autoPlay, 1000)
  }
}

  function ft_autoStop()
    {
      window.clearInterval(timer)
      timer = undefined;
      console.log(timer);

    }

function ft_next()
  {
    etat = etat +1;
    if (etat > 5)
    {
      etat = 0;
    }
    ft_affichagePhoto()
  }

function ft_prev()
  {
    etat = etat -1;
    if (etat < 0)
    {
      etat = 5
    }
    ft_affichagePhoto()
  }

function ft_ramdom(nin, max)
  {
    etat = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
    ft_affichagePhoto()
  }




/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/
