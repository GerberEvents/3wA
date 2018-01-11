
// initialiser le popup:
$(document).ready(ft_ready)

function ft_ready()
{
  $('.open-popup-link').magnificPopup({
  type:'inline',
  midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
});
ft_displayContact();
}



document.getElementById('stockage').onclick = ft_getContactList();

function(ft_getContactList)
{
	/*if(typeof localStorage!='undefined' && JSON) {
		var coordonnees = {
			nom:document.getElementById('nom').value,
			prenom:document.getElementById('prenom').value,
			telephone:document.getElementById('telephone').value,
      email:document.getElementById('email').value,
		};
		localStorage.setItem('coord',JSON.stringify(coordonnees));
		alert("Mémorisation effectuée");
	} else alert("localStorage n'est pas supporté");*/
  location.reload();
};
