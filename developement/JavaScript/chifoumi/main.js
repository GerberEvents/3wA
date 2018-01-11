var utilisateur;
var ordinateur;
var nombre;
var gagner;
var perdu;
const reponses= ["Pierre","Feuille","Ciseau"]


do {
utilisateur = window.prompt("Pierre,Feuille,Ciseau");
}while (!reponses.includes(utilisateur))

consol.log(utilisateur)


switch (ordinateur = math.floor(math.random()*3)+1) {
  case 'Pierre': result = (ordinteur) => 1
    break;
  case 'Feuille': result = (ordinteur) => 2
    break;
  case 'Ciseau': result = (ordinteur) => 3
    break;
  default:
}
