// Déclaration d'une constante.
const TAUX_DE_TVA = 20.0;

// Déclaration de trois variables.
var montantHT;
var montantTTC;
var montantTVA;

/*
 * Demande à l'utilisateur de saisir quelque chose dans une popup, lorsque la popup se referme le
 * résultat sera affecté à la variable.
 */
montantHT = window.prompt('Entrez votre montant HT');
montantHT = parseFloat(montantHT);

// Opérations arithmétiques sur des variables et constantes.
montantTVA = montantHT * TAUX_DE_TVA / 100;
montantTTC = montantHT + montantTVA;

// Affichage du résultat directement dans la page HTML.
document.write("<p> Votre montant TTC est de " + montantTTC + ' euros<p>');
document.write("<p> Votre montant HT est de  " + montantHT + ' euros<p>');
document.write("<p> Votre montant TVA est de  " + montantTVA + ' euros<p>');
