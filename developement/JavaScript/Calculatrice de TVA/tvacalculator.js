// Déclaration d'une constante.
const TAUX_DE_TVA = 20.0;

// Déclaration de trois variables.
var montantHT = document.getElementById("montantHT").value;
var remiseYn = document.getElementById("remiseoui").value;
var montantRemise = document.getElementById("remisede").value;
var resultRemiseHt;
var RemiseHT;
var montantTTC;
var montantTVA;

function test(form)
{

}

/*
 * Demande à l'utilisateur de saisir quelque chose dans une popup, lorsque la popup se referme le
 * résultat sera affecté à la variable.
 */



 /*
  * montantHT = window.prompt('Entrez votre montant HT');
montantHT = parseFloat(montantHT);
remiseYn = window.prompt('voulez vous une remise');*/

  /*
   *  montantRemise = window.prompt('Entrez votre remise en %');
  montantRemise = parseFloat(montantRemise);*/



if(remiseYn == "oui" || remiseYn == "yes")
{
    // Si la comparaison vaut le booléen true alors ce code s'exécute.
    document.write("<p>Vous avez un remise de " + montantRemise + '%. alors :</p>');
    // Opérations arithmétiques sur des variables et constantes.
    resultRemiseHt = montantHT * montantRemise / 100;
    RemiseHT = montantHT - resultRemiseHt;
    montantTVA = RemiseHT * TAUX_DE_TVA / 100;
    montantTTC = RemiseHT + montantTVA;

    // Affichage du résultat directement dans la page HTML.
    document.write("<p> Votre montant TTC avec remise est de " + montantTTC + ' euros<p>');
    document.write("<p> Votre montant HT est de  " + montantHT + ' euros<p>');
    document.write("<p> Votre montant de votre remise HT est de  " + resultRemiseHt + '  euros<p>');
    document.write("<p> Votre montant TVA est de  " + montantTVA + ' euros<p>');
}
else
{

    // Opérations arithmétiques sur des variables et constantes.
    montantTVA = montantHT * TAUX_DE_TVA / 100;
    montantTTC = montantHT + montantTVA;

    // Si la comparaison vaut le booléen true alors ce code s'exécute.
    document.write("<p>Vous n'avez pas de remise donc :</p>");
    // Affichage du résultat directement dans la page HTML.
    document.write("<p> Votre montant TTC est de " + montantTTC + ' euros<p>');
    document.write("<p> Votre montant HT est de  " + montantHT + ' euros<p>');
    document.write("<p> Votre montant TVA est de  " + montantTVA + ' euros<p>');
}
