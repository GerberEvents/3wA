/* variable*/
var button = document.querySelectorAll('.toggle-modif');
//var block =  document.querySelectorAll('.block')
/* Events*/
for (but of button)
  {
    but.addEventListener("click",ft_afficher_cacher)
  }


/* fonctions*/

function ft_afficher_cacher(event)
  {
    var parent =  this.parentNode.parentNode;
    var block = findNode(parent, "block");
    console.log(this.parentNode.parentNode.childNodes[5]);
    block.classList.toggle('afficher');
    console.log('afficher');
  }

  function findNode(element, classe)
  {
    var children = element.childNodes;
    var child = null;
    for (c of children) {
      if(c.nodeType == 1) {
        console.log(c);
        if (c.classList.contains(classe)) {
          child = c;
          console.log(child);
          break;
        }
      }
    }
    return child;
  }
