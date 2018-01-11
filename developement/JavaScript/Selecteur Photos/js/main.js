var selectImage =  document.querySelector('ul');
var reset = document.querySelector('#reset');
/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/

selectImage.addEventListener("click",ft_selectImage);

selectImage.addEventListener("mouseover",ft_onMouseOver);

selectImage.addEventListener("mouseout",ft_onMouseOut);

reset.addEventListener("click",ft_reset);

/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/

function ft_comptImage()
  {
    var nbrImage;
    nbrImage = document.querySelectorAll('.selectImage').length;
    document.querySelector('span').innerHTML = nbrImage;
  }

function ft_selectImage(event)
{

    if (this != event.target)
    {
      event.target.classList.toggle('selectImage');
      ft_comptImage();
    }

}

function ft_onMouseOver(event)
{
    if (this != event.target)
    {
      event.target.classList.toggle('onMouseOver')
      console.log('toggle onMouseOver')
    }
}

function ft_onMouseOut(event)
{
    if (this != event.target)
    {
      event.target.classList.remove('onMouseOver');
      console.log('remove onMouseOver')
    }
}

function ft_reset()
{
  console.log(document.querySelectorAll('.selectImage'));
  for (let i of document.querySelectorAll('.selectImage'))
  {
    i.classList.remove('selectImage');
  }
  ft_comptImage();
  console.log('remove all');
}



/*************************************************************************************************/
/* ************************************** Drag & drop *************************************** */
/*************************************************************************************************/
