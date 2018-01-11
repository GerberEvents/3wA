/* variable*/
var button = document.querySelector('#toggle-rectangle');
var block =  document.querySelector('.block')
/* Events*/

button.addEventListener("click",ft_afficher_cacher)

block.addEventListener("dblclick",ft_dbclick)

block.addEventListener("mouseover",ft_onMouseOver)

block.addEventListener("mouseout",ft_onMouseOut)

/* fonctions*/

function ft_afficher_cacher(id)
  {
    block.classList.toggle('cacher');
    console.log('cacher')
  }

function ft_dbclick(id)
    {
      block.classList.toggle('green');
      console.log('green')
    }
function ft_onMouseOver(id)
    {
      block.classList.toggle('red')
      console.log('red')
    }
function ft_onMouseOut(id)
    {
      block.classList.remove('green','red');
      console.log('bleu')
    }
