/* var myNumber = 2;

// var myText = "mon texte en gras";

// var myBoolean = false;
// alert(typeof myBoolean);

/*
var someText = prompt("Gimme some T, man!", "textee");
alert(someText);
*/

/*
var start = "Bonjour ", name, end = " !", result;
name = prompt("What's your name?", "Fredo");
result = start + name + end;
alert(result)
*/

/* ON additions les deux chiffres demandés à l'utilisateur
var numberOne, numberTwo, result; 
numberOne = prompt("Choose first number to add", "5");
numberTwo = prompt("Choose second number to add", "1")
result = parseInt(numberOne) + parseInt(numberTwo) // conversion de string en number
alert("Your result is " + result)
*/

/*
alert(2!=='2') // Comparaison de type et de contenu
*/

// alert(!true||!true) 

/*
var condition1, condition2, result;

condition1 = 5 < 3; // false
condition2 = 4 >= 2; // true

result = condition2 || condition1;

alert(result);
*/

/*
if(confirm("Are you sure?")){
  alert("Let's Go!");
}
*/

/*
var floor;
floor = parseInt(prompt("Which floor should we go to? (-4 : 20)","1"));

if (floor == 0) {
  alert("We already here!")
} else if (floor <= -5 || floor >= 21) {
  alert("Oups, can't go there...")
}
else {
  alert("Let's go to the " + floor + " floor!")
}
*/

/*
var door = parseInt(prompt("Which door to choose ? (1-3)", "4"));

switch (door) {
  case 1:
    alert("The first one");
    break;

  case 2:
    alert("The second door")
    break

  case 3:
    alert("Do smg!")
    break

  default:
    break;
}
*/

/*
var startMessage = 'Votre catégorie : ',
  endMessage,
  adult = confirm('Êtes-vous majeur ?');

endMessage = adult ? '18+' : '-18';

alert(startMessage + endMessage);
*/

// alert('Votre catégorie : ' + (confirm('Êtes-vous majeur ?') ? '18+' : '-18')); 

/*
var userAge = parseInt(prompt("How old are you?", "30"))

if (userAge < 0) {
  alert("you don't exist")
} else if (0 < userAge && userAge < 18) {
  alert("You're a child");
} else if (18 <= userAge && userAge < 50) {
  alert("You're a man");
} else if (50 <= userAge && userAge < 60) {
  alert("You're almost retired")
} else if (60 <= userAge && userAge < 120) {
  alert("You are almost dead");
} else if (userAge >= 120) {
  alert("That's impossible")
}
*/

/*
var number = 0, iteration = 0;
while (number <10) {
  ++number
}
alert(number);
*/

/*
for (var iter = 1; iter <= 10; iter++) {
  alert('Itération n°' + iter);
}
*/

/*
for (let nicks = '', nick; true; ) {
nick = prompt("What name?");

  if (nick) {
    nicks += nick + " ";
  } else {
    alert(nicks)
    break;
  }
}
*/

/*
myFunction();

function myFunction(array) {
  for (let index = 0; index < array.length; index++) {
  
  }
}
*/

/*
function myFirstFunction(params) {
  alert(params)
}

myFirstFunction("Hello World")
*/

/*
function moar(first, second) {
  // On peut maintenant utiliser les variables "first" et "second" comme on le souhaite :
  alert('Votre premier argument : ' + first);
  alert('Votre deuxième argument : ' + second);
}

moar(
  prompt('Entrez votre premier argument :'),
  prompt('Entrez votre deuxième argument :')
);
*/

/*
function prompt2(text, allowedCancel) {
  if (typeof allowedCancel === 'undefined') {
    allowedCancel = false;
  }
  return text;
}

prompt2("Hello World")
*/

/*

function sayHi() {
  return "Hi!";
}

alert(sayHi());
*/

/*
var helloWorld = function (){
  alert("Hello World!")
};

helloWorld();
*/


/*
// Code externe

(function () {

  // Code isolé

})(); // les parenthèses après la fct servent à l'appeler juste après sa création

// Code externe

*/

/*

var test = 'noir'; // On crée une variable « test » contenant le mot « noir »

(function () { // Début de la zone isolée

  var test = 'blanc'; // On crée une variable du même nom avec le contenu « blanc » dans la zone isolée

  alert('Dans la zone isolée, la couleur est : ' + test);

})(); // Fin de la zone isolée. Les variables créées dans cette zone sont détruites.

alert('Dans la zone non-isolée, la couleur est : ' + test); // Le texte final contient bien le mot « noir » vu que la « zone isolée » n'a aucune influence sur le reste du code
*/

/*

var calculus = (function(){
  var result = 0;
  result += 2;
  return result;
})();

alert(calculus);

*/

/*
var someText = "une Jolie chaine de char...";
alert(someText.length);
alert(someText.toUpperCase());
*/

/*
var myFirstArray = [1, 2, 3, 4, 5];
alert(myFirstArray.length); // counts the number of elements in the array
alert(myFirstArray[3]);
*/


/* 
// Generates an array of 10 random numbers between 0 and 10
var myRandomNumbers = []

for (let index = 0; index < 10; index++) {
  myRandomNumbers.push(Math.round(Math.random() * 10)) // adds an item at the end of the array. 
};

alert(myRandomNumbers);
*/

/*
// Decompose a phrase into an array of words puis l'inverse...
var unePhrase = 'Voici une phrase dont je ne suis pas peu fier.';
var motsDeLaPhrase = unePhrase.split(' '); 
var nouvellePhrase = '';
alert(motsDeLaPhrase);
alert(nouvellePhrase = motsDeLaPhrase.join(' '))
*/

/*
// Display the content of an array
var myArray = ['Sébastien', 'Laurence', 'Ludovic', 'Pauline', 'Guillaume'];
for (let index = 0, c = myArray.length ; index < c ; index++) {
  alert(myArray[index]);  
}
*/

// Building an object / table and listing its elements with for in loop 
/*
var routeArray = {
    name: 'Chimpanzodrome',
    grde: '7c+',
    height: '15',
    holdType: 'mono',
    stars: '4'
};

routeArray.profil = 'Overhang';

for (const key in routeArray) {
  alert(routeArray[key]);
}
*/


// Fct returns a table / object
/*
function getCoords() {

return {
  x: 12,
  y: 21
};
}

var coords = getCoords();

alert(coords.x); // 12
alert(coords.y); // 21
*/

// Ask the user for names, stores them in an array and then displays them all. Also handles errors or empty
/*
var nicks = [],
  nick;

while (nick = prompt('Entrez un prénom :')) {
  nicks.push(nick);
}

if (nicks.length > 0) {
  alert(nicks.join(' ')); // Affiche les prénoms à la suite  
} else {
  alert("Missing name");
}
*/

/*
// console.log() permet d'afficher la valeur dans la console du navigateur plutôt que dans une boite de dialogue
for (var i = 0; i < 10; i++) {
  // On affiche les valeurs de notre boucle dans la console.
  console.log('La valeur de notre boucle est : ' + i);
}
*/

/*
// création et visualisation d'un objet dans la console
// On crée un objet basique.
var helloObject = {
  english: 'Hello',
  french: 'Bonjour',
  spanish: 'Hola'
};

// Et on l'affiche.
console.log(helloObject);

// Tant qu'à faire, on affiche aussi un tableau.
var helloArray = ['Hello', 'Bonjour', 'Hola'];

console.log(helloArray);
*/


// Debug et point d'arret

/* 
// La fonction « a » affiche la valeur qu'elle reçoit de « b ».
function a(value) {
  console.log(value);
}

// La fonction « b » incrémente la valeur reçue par « c » puis la passe en paramètre à « a ».
function b(value) {
  a(value + 1);
}

// La fonction « c » incrémente la valeur reçue par la boucle for puis la passe en paramètre à « b ».
function c(value) {
  b(value + 1);
}

// Pour chaque itération, cette boucle passe en paramètre la valeur de « i » à la fonction « c ».
for (var i = 0; i < 10; i++) {
  c(i);
}
*/