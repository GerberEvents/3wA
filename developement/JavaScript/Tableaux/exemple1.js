// Déclaration de deux variables.
var daySunday;
var weekDays;
var moi;


// Affectation d'un tableau vide à une variable.
weekDays = new Array();     // syntaxe longue

// La syntaxe raccourcie est : weekDays = [];


// Affectation de valeurs au tableau.
weekDays[0] = 'Dimanche';
weekDays[1] = 'Lundi';
weekDays[2] = 'Mardi';
weekDays[3] = 'Mercredi';
weekDays[4] = 'Jeudi';
weekDays[5] = 'Vendredi';
weekDays[6] = 'Samedi';

// Affectation d'une valeur à la variable.
daySunday = 5;

moi = new Array();
moi[0] = 'Janvier';
moi[1] = 'Fevrier';
moi[2] = 'Mars';
moi[3] = 'Avril';
moi[4] = 'Mai';
moi[5] = 'Juin';
moi[6] = 'Juillet';
moi[7] = 'Aout';
moi[8] = 'Septembre';
moi[9] = 'Octobre';
moi[10] = 'Novembre';
moi[11] = 'Décembre';

// variable afichage du date du jour 
var d = new Date();
var p = d.getDay();

var m = d.getMonth();

/*
 * Affichage du contenu d'une partie du tableau directement dans la page HTML.
 *
 * La variable daySunday est utilisée comme un indice dans le tableau weekDays.
 */
document.write('<p>Le premier jour de la semaine est le ' + weekDays[1] + ' ');
document.write('Le dernier jour de la semaine est le ' + weekDays[daySunday] + '.</p>');
document.write('<p>Nous somme ' + weekDays[p] + ' du moi de ' + moi[m] + '.</p>');