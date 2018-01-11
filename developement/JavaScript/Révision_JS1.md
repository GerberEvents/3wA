__N.B.__ `Utiliser le package markdown-preview` de Atom pour visualiser correctement le fichier`

# Fondements

* Un __programme__ est une __suite linéaire__ d'instructions

* Une __instruction__ est une __expression__ suite d'un séparateur d'instructions
  * Le séparateur d'instruction en JavaScript (comme en PHP) est le caractère '_;_' et il est de surcroît facultatif en JS

  * on distingue des instruction particulières appelées __structures de contrôle__ dont le rôle est de pouvoir manipuler la linéarité stricte de l'ordre d'exécution des instructions :

    * soit en instaurant des alternatives (__conditionnelles__)

      `if () {} else {}` / switch () { case ... }`

    * soit en “_remontant_” en arrière dans la flux des instructions (__boucles__)

      `for () {} / while () {}` / do {} while () / for ... of / for ... in`

* Une __expression__ est :

  * soit une variable
  ```javascript
var chaineHello = "Hello 3WA";
```

  * soit une constante
  ```javascript
  const CHAINE_HELLO = "Hello 3WA";
  ```

  * soit un un appel de fonction

  * soit une formule :

    `[< expression >] < __opérateur__ > [< expression >]`

    `(< expression >)

* un __opérateur__ est une fonction spéciale, prédéfinie, munie d'un __ordre de précédence__ qui hiérarchise l'__évaluation__ des expressions.

  * les opérateurs sont __unaires__ (liés à une expression), __binaires__ (liant deux expressions), voire exceptionnellement __ternaires__
  ```javascript
  // opérateur unaire
  pointsDeVie--
   // opérateur binaire
  x + y     // arithmétique
  x && y    // logique
  x >= y    // comparaison
  'x' + 'y' // chaînes de caractères
  x>>>2     // binaires
  (pointsDeVie == 0) ? true : false //ternaire
  ```
  * par ailleurs, on distingue des opérateurs __préfixes__ (placés devant une expression), __suffixes__ (placés derrière une expression) et __infixes (placés entre deux expressions)
  ```javascript
   ++x     // opérateur préfixe
   x++     // opérateur suffixe
   x + y   // opérateur infixe
  ```
  * on peut structurer une expression en regroupant des __sous-expressions__ à l'intérieur de parenthèses.
  ```javascript
  ((x + 3) * f(3,4)) - (((x + y) ** 2) / ((x - y)) ** 2)
  ```

# Exercices

## -- Structures de données

__N.B.__ `Toute valeur doit être réutilisée doit impérativement est mémorisée dans une variable`

### A) Types simples (ou __scalaires__)

#### 1 Opérateurs sur des valeurs scalaires
```
// Quelles valeurs rend l'évaluation des expressions suivantes ?

3 + 4
3 + "4"
"3" + "4"
3 * true
3 / false
"dsfsfdsfds" + []
32 >> 1
32 << 1
3 * 4 - 25 / 5
3 > 1 && 8 < 5
8 % 3 ++
typeof 3 + 5 = "number"
32 << 1 + 4 / 2
```

### B) Tableaux

#### 2 Structure de tableau

```javascript
// Lesquelles de ces défintions sont-elles correctes ?

const T1 = ['pomme', 'poire', 'banane', 'scoubidou'];
const t2 = [1; "morbleu"; true];
var t3 = [2, 3, 4, 3 * 4];
var t4 = [[ain: "01"], [aisne: "02"]];
var T6 = [{ain: "01"}, {aisne: "02"}];

```

#### 3 Construction de Tableaux

`Construire un tableau contenant la liste des régions françaises`

#### 4 Trouver un élément dans un tableau

`Trouver la valeur du tableau t dont la position correspond à l'indice 0 de ce même tableau. Quelle est l'erreur possible et comment la résoudre ?`

### Objets

#### 5 Structure d'objet

```javascript
// Lesquelles de ces défintions sont-elles correctes ?

var O1 = {
    nom,
    prenom,
    age
};
var O2 = {
    nom = "Escort",
    prenom = "Ford",
    profession = "routard intergalactique"
}
var O3 = {
    'nom': if (true) "Adams" else "Pratchett",
    'prenom': "Douglas"
}
var O4 {
    nom: "Ad" + "ams",
    prenom: 'd'.toUpperCase + "ouglas"
}
var O5 {
    'nom': "Calamity Jane",
    'genre' : "Bande dessinée",
    'auteurs': [Morris, {prenom: 'René', nom 'Goscinny'}]
}
```

#### 6 Création d'un objet

`Construire un objet représentant une pièce (au choix) de Molière, avec la date de la création ainsi que la liste des personnages principaux et les nom des acteurs qui ont créé le rôle`

[Par exemple __Tartuffe__ sur Wikipedia](https://fr.wikipedia.org/wiki/Le_Tartuffe_ou_l%27Imposteur)

```javascript

var tartuffe {
  nomDeLaPiece : 'tartuffe';
  auteur : 'Moliére';
  dateDeNaissanceAuteur : '1622'
  dateDeCreation : '1669';
  personnages : [
    {role : 'Mme Pernelle', acteur :" Louis Béjart"},
    {role :'Orgon', acteur : "Molière"},
    {role : 'Elmire', acteur : "Armande Béjart"},
    {role : 'Damis', acteur : "Hubert"},
    {role : 'Mariane', acteur : "Catherine de Brie"},
    {role : 'Valère', acteur : "La Grange"},
    {role : 'Cléante', acteur : "La Thorillière"},
    {role : 'Tartuffe', acteur : "Du Croisy"},
    {role : 'Dorine', acteur : "Madeleine Béjart"},
    {role : 'M. Loyal', acteur : "De Brie"},
    {role : 'Un exempt', acteur : ""},
    {role : 'Flipote', acteur : ""},
  ];
}
```
#### 7 Manipulation d'objet

`Ajouter à l'objet précédent la ville où a été créée la pièce`

`Quel âge avait Molère lorsqu'il a écrit cette pièce ?`

`Combien d'années se sont écoulées depuis ?`

`Molière faisait-il partie des acteurs qui ont créé la pièce ?`

`Combien de rôles (principaux) contient cette pièce ?`


## -- Structures algorithmiques

### A) Conditionnelles

#### 8 Différents cas de figure

`Dans quels cas de figure utilisera-t-on if ou switch ? A-t-on toujours le choix ?`

+ Ne pas faire la division x / y si y est égal 0
+ Si x est négatif je veux prendre l'inverse de x sinon, je veux conserver sa valeur
+ Si la chaîne de caractères c contient le nom d'une couleur en français, afficher ce nom en anglais
+ Si la t° < 0°C l'état de l'eau est "glace", si t° > 0 et < 100°C  l'état de l'eau est "liquide", et si t° > 100°C  l'état de l'eau est "vapeur"
+ Si je possède un certin “badge”, je peux acheter des armes plus puissantes ou davantage de réserves de nourriture

```javascript



```

#### 9 Equivalence

```javascript
// Les deux syntaxes suivantes sont-elles équivalentes ?

if (x > 0 && y > 0) {

} else if (z > 0) {

}


if (x > 0) {
    if (y > 0) {

    }
} else {
    if (z > 0) {

    }
}
```

#### 10 if

```javascript
// que fait cette séquence ?
var x = 1,
    y = -5,
    z = 0;

if (x > 0 && y < 10) {
    z = Math.pow(Math.abs(y), Math.min(0.5, 1/x))/x;
    console.log(z)
}
```

#### 11 switch

```javascript
// Peut-on répondre à la question « qui était président de la République quand je suis né ? » ? Si vous pensez que non, que ferait cette séquence ?

var o = {
    nom: 'arthur',
    naissance: 1983
}
switch (o.naissance) {
    case 1969:
        console.log("Georges Pompidou")
        break;
    case 1974:
        console.log("Valery Giscard d'Estaing")
        break;
    case 1981:
    case 1988:
        console.log("François Mitterand")
    case 1995:
    case 2002:
        console.log('Jacques Chirac')
    case 2007:
        console.log('Nicolas Sarkozy')
    case 2012:
        console.log('François Hollande')
    case 2017:
        console.log('Emmanuel Macron')
    default:
        console.log("Trop vieux !")
        break;
}
```

### B) Boucles

#### 12 Diférents cas de figure

`Quelle structure de boucle utilisera-t-on dans les cas suivants ?`

+ Je veux faire un compte à rebours à partir de 100 (une itération par seconde) et afficher un message toutes les 10 itérations, puis un message d'alerte à la fin du cycle
+ Je veux extraire d'une liste de noms tous ceux qui commencent pas 'A' (ou, bonus, par une voyelle)
+ Je voudrais pouvoir mettre les objets d'une liste dans un panier jusqu'à ce que je décide d'arrêter ou que la liste de départ soit vide
+ Je voudrais parcourir toutes les propriétés d'un objet pour trouver celle qui possède la valeur que je recherche
+

#### 13 Mot de passe

`Ecrire une boucle qui oblige l'utilisateur à entrer un mot de passe contenant au moins 1 ciffre, une lettre majuscule, et un symbole parmi : @&!:;`


#### 14 Acteurs

`Etant donnée une liste de pièces de Molière sur le modèle vu plus haut, écrire une boucle qui permettrait d'afficher le titre des pièces dans laquelle on trouve un personnage appelé Damis et le nom des acteurs qui les ont joués`

`Quelles sont les pièces qui n'ont pas été jouées par Molière en personne ?`

#### 15 Paniers

`Dans un site de commerce, un tableau représente l'ensemble des paniers des clients et chaque panier est lui-même un tableau de produits. Comment afficher le contenu de tous les paniers ? Et si chaque panier est un objet ayant comme propriétés le nom du client et le contenu ?`


### C) Fonctions

#### 16 Déclaration de fonction

```javascript
// Cette déclaration de fonction est-elle correcte ?

function f {
    return x + y;
}
// faux car fonction () {}
```

#### 17 Exponentielle

```javascript
// Que fait cette fonction ?

var x = 2,
    y = 10;

function f (i) {
    i ** 2;
}

console.log( y ** f(x))

```

#### 18 Extension de la fonction “includes”

`Ecrire une fonction` __includeSet__ `qui vérifie qu'une chaîne de caractères contient une lettre parmi un ensemble donné`


#### 19 Récursivité
```javascript
// Que fait cette fonction ?

var x = parseInt(window.prompt());

function f (i) {
    if (i == 0) {
        return 0;
    } else {
        return i + f(i - 1);
    }
}

console.log(f(x))

```
#### 20 Rendu de monnaie

`Ecrire une fonction qui détermine quelle est la monnaie à rendre à un client en échange de son paiement`

```javascript
const unites = [100, 50, 20, 10, 5, 2, 1 ]
var prix,
    paiement;

/**
 * Calcule la monnaie à rendre
 * @param  int p1 prix du produit
 * @param  int p2 somme versée par le client
 * @return array monnaie Liste des billets/pièces rendues
 */
function renduMonnaie (p1, p2) {
    // code...
    return monnaie;
}
```
