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
    grade: '7c+',
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

// First practical Case 
// Convert a number to a string
/*

// Definition tables
var conversionTableUnit = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

var conversionTableTen = ["ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

var conversionTableExeptions = ["eleven", "twelve","thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]

// Définition of our variables to build our strings
var stringConstructionHundreds = "";
var stringConstructionTens = "";
var stringConstructionUnits = "";

// User input to be passed to function
var numberToConvert = parseInt(prompt("Choose a number between 0 and 999", "115"),10);

// This function splits the number into 3 parts : hundreds, tens and units
function convertNumberToString(aNumber) {

  var numberOfHundreds = Math.floor(aNumber / 100);
  var numberOfTens = Math.floor((aNumber % 100) / 10);
  var numberOfUnits = aNumber % 10;

  // log it in the console
  // console.log(numberOfHundreds);
  // console.log(numberOfTens);
  // console.log(numberOfUnits);

  // construction of the hundreds string only if not 0
  if (numberOfHundreds) {
    stringConstructionHundreds = conversionTableUnit[numberOfHundreds - 1] + " hundreds and "
  }

  // Construction of the units string only if not 0
  if (numberOfUnits) { 
    stringConstructionUnits = conversionTableUnit[numberOfUnits - 1]
  }

  // Construction of the tens string
  switch (numberOfTens) {
    case 0: // no string if no tens
      stringConstructionTens = ""; 
      break;
    case 1: // to deal with the 'teen
      stringConstructionTens = conversionTableExeptions[numberOfUnits - 1]; 
      stringConstructionUnits = ""; // remember to erase the unit string in this special case
      break;
    default: // normal case 20, 30, 40...
      stringConstructionTens = conversionTableTen[numberOfTens - 1] + " "
      break;
  }

  // At the end of the function return an alert to the user to express the result
  alert("Your number is " + stringConstructionHundreds + stringConstructionTens + stringConstructionUnits);
}

convertNumberToString(numberToConvert);
*/


// La version équivalente en français
/*
function num2Letters(number) {

    if (isNaN(number) || number < 0 || 999 < number) {
        return 'Veuillez entrer un nombre entier compris entre 0 et 999.';
    }

    var units2Letters = ['', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize', 'dix-sept', 'dix-huit', 'dix-neuf'],
        tens2Letters = ['', 'dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante', 'quatre-vingt', 'quatre-vingt'];

    var units = number % 10,
        tens = (number % 100 - units) / 10,
        hundreds = (number % 1000 - number % 100) / 100;

    var unitsOut, tensOut, hundredsOut;


    if (number === 0) {

        return 'zéro';

    } else {

        // Traitement des unités

        unitsOut = (units === 1 && tens > 0 && tens !== 8 ? 'et-' : '') + units2Letters[units];

        // Traitement des dizaines

        if (tens === 1 && units > 0) {

            tensOut = units2Letters[10 + units];
            unitsOut = '';

        } else if (tens === 7 || tens === 9) {

            tensOut = tens2Letters[tens] + '-' + (tens === 7 && units === 1 ? 'et-' : '') + units2Letters[10 + units];
            unitsOut = '';

        } else {

            tensOut = tens2Letters[tens];

        }

        tensOut += (units === 0 && tens === 8 ? 's' : '');

        // Traitement des centaines

        hundredsOut = (hundreds > 1 ? units2Letters[hundreds] + '-' : '') + (hundreds > 0 ? 'cent' : '') + (hundreds > 1 && tens == 0 && units == 0 ? 's' : '');

        // Retour du total

        return hundredsOut + (hundredsOut && tensOut ? '-' : '') + tensOut + (hundredsOut && unitsOut || tensOut && unitsOut ? '-' : '') + unitsOut;
    }

}



var userEntry;

while (userEntry = prompt('Indiquez le nombre à écrire en toutes lettres (entre 0 et 999) :')) {

    alert(num2Letters(parseInt(userEntry, 10)));

}
*/


/*
// A simple function to build an array of int from lowerBond to higherBond
function buildingArray(lowerBond, higherBond, step) {
  var myArray = [lowerBond];
  var myStep = 1;
  myStep = step;

  for (let index = 0; index < higherBond; index++) {
    myArray.push(index * myStep);
  }
  return myArray;
}
*/

/*
// Va créer une table de tous les éléments div du document et les affiche ds une alert
var divs = document.getElementsByTagName('div');

for (var i = 0, c = divs.length; i < c; i++) {
  alert('Element n° ' + (i + 1) + ' : ' + divs[i]);
}
*/

/*
// Va chercher les éléments menu / item / span et affiche le contenu grace à ".innerHTML"
var query = document.querySelector('#menu .item span'),
  queryAll = document.querySelectorAll('#menu .item span');

alert(query.innerHTML); // Affiche : "Élément 1"

alert(queryAll.length); // Affiche : "2"
alert(queryAll[0].innerHTML + ' - ' + queryAll[1].innerHTML); // Affiche : "Élément 1 - Élément 2"
*/
/*
// Collection of spans & display length of the 2nd
var spans = document.querySelectorAll("span");
alert(spans[1].innerHTML.length);
*/



/*
var link = document.getElementById("myLink");
var href = link.getAttribute("href");

alert(href);

link.setAttribute('href', 'http://www.siteduzero.com');
*/

// Not working on logging.html
/*
var smg = document.getElementById('ascentDate').getAttribute('placeholder');
alert(smg);
*/

/*
// gets the target id en then sets its CSS class property to blue
document.getElementById('myColoredDiv').className = 'blue';
*/

/*
// Fetches the class of the element and transforms it into an array
classes = document.getElementById('myLink').className;
stringClasses = classes.split(' ');
alert(stringClasses[2]);
*/

/*
var div = document.querySelector('div');

div.classList.add('Newbie');
div.classList.add('oldies');
div.classList.remove("Newbie");
div.classList.toggle('Newbie');
console.log(div.classList[0]);

*/


/*
// Quelques manipulations de class de div : classList, add remove, contains, toggle
var div = document.querySelector('div');

// Ajoute une nouvelle classe
div.classList.add('new-class');

// Retire une classe
div.classList.remove('new-class');

// Retire une classe si elle est présente ou bien l'ajoute si elle est absente
div.classList.toggle('toggled-class');

// Indique si une classe est présente ou non
if (div.classList.contains('old-class')) {
  alert('La classe .old-class est présente !');
}

// Parcourt et affiche les classes CSS
var result = '';

for (var i = 0; i < div.classList.length; i++) {
  result += '.' + div.classList[i] + '\n';
}

alert(result);
*/

/*
var div = document.getElementById('myDiv');

alert(div.innerHTML); // returns plain text
*/

/*
// Manipulation d'ajout / remplacement d'html via JS
document.getElementById('myDiv').innerHTML = '<blockquote>Je mets une citation à la place du paragraphe</blockquote>';

for (let index = 0; index < 10; index++) {

document.getElementById('myDiv').innerHTML += ' et <strong>une portion mise en emphase</strong>.';
}
*/

// document.getElementById('myDiv').innerHTML += '<p>et un autre <a>lien</a>.</p>' 



/*
// an array of french grades
var someFrGrades = ["7a", "7b", "8a", "9a", "6c", "8b", "7b"];

// The table of conversion between french grade and numerical grade
const conversionTableFrGradeToNumGrade = {
  '4a': "1",
  '4b': "2",
  '4c': "3",
  '5a': "4",
  '5b': "5",
  '5c': "6",
  '6a': "7",
  '6a+': "8",
  "6b": "9",
  "6b+": "10",
  "6c": "11",
  "6c+": "12",
  "7a": "13",
  "7a+": "14",
  "7b": "15",
  "7b+": "16",
  "7c": "17",
  "7c+": "18",
  "8a": "19",
  "8a+": "20",
  "8b": "21",
  "8b+": "22",
  "8c": "23",
  "8c+": "24",
  "9a": "25",
  "9a+": "26",
  "9b": "27",
  "9b+": "28",
  "9c": "29"
};

// The fonction which converts one or multiple french grades to numerical grades
function convertFrGradeToNumGrades(anArrayOfFrGrades) {
  var convertedNumGrades;
// tests if it's only one grade "7a" which is a string
  if (typeof anArrayOfFrGrades === "string") { // Conversion if only one grade passed as a string
    convertedNumGrades = conversionTableFrGradeToNumGrade[anArrayOfFrGrades];
  } else if (typeof anArrayOfFrGrades === "object") { // Converstion if an array (of fr grade is passed)
    convertedNumGrades = []; // needs to set the variable to an array
    for (let index = 0; index < anArrayOfFrGrades.length; index++) { // goes trough each element of the passed array
      convertedNumGrades.push(conversionTableFrGradeToNumGrade[anArrayOfFrGrades[index]]);
    }
  }
    console.log('typeof convertedNumGrades :', typeof convertedNumGrades, convertedNumGrades);

  return convertedNumGrades; // returns either resut : a string if it's a single grade or an object of numbers 

};

alert(convertFrGradeToNumGrades(someFrGrades)); // shows the result for some french grades
*/


/*
// Selection de noeud par id puis navigation au parent avec .parentNode
var paragraph = document.getElementById("myP");

var blockquote = paragraph.parentNode;

var paragraph = document.getElementById('myP');
alert(paragraph.nodeType + '\n\n' + paragraph.nodeName.toLocaleLowerCase());
*/

/*
// Un peu de manimuplation de DOM
var monPremierEnfant = document.getElementById("myP").firstChild;

var monDernierEnfant = document.getElementById("myP").lastChild.textContent.toUpperCase();

console.log('monPremierEnfant :', monPremierEnfant);
console.log('monDernierEnfant :', monDernierEnfant);
*/


// Some more manipulation : lastChild & firstChild & nodeValue and data both return the values inside the node

/*
var paragraph = document.getElementById("myP");
var first = paragraph.firstChild;
var last = paragraph.lastChild;

console.log(first.nodeValue);
console.log(last.firstChild.data);
*/

/*
// ChildNode renvoie un tableau des enfant du noeud. On le parcourt pour en extraire les info de texte.
var paragraph = document.getElementById("myP");
var enfants = paragraph.childNodes;

for (let index = 0; index < enfants.length; index++) {

  if (enfants[index].nodeType === Node.ELEMENT_NODE) {
    console.log(enfants[index], enfants[index].firstChild.data);
  } else {
    console.log(enfants[index].data);
  }
}
*/


// First model of an ascent
var ascent = {
  "name": "Chimpanzodrome", // Mandatory
  "topoGrade": "7c+", // Mandatory
  "myGrade": "7c",
  "gradeSystem": "French",
  "tries": "10", // Mandatory
  "ascentDate": "08/04/2020", // Mandatory
  "routeBoulder": "route", // Mandatory
  "height": "15",
  "heightUnit": "m",
  "holdType": "Mono",
  "Profil": "Overhang",
  "crag": "Le Saussois",
  "area": "Chimpanzodrome",
  "cragLattitude": "0",
  "lattitudeUnit": "degrees",
  "cragLongitude": "45",
  "longitudeUnit": "degrees",
  "comments": "blablabla"
}

/*

function submitForm() {

// console.log('ascentFormId :', document.getElementById(AscentFormId).submit());

  ascent["name"] = document.getElementById("routeName").value;
  // ascent["routeBoulder"] = document.getElementById("routeBoulder").value;
  console.log(ascent["name"]);
  console.log(ascent);

  return 1;
}
*/



// World Population source Wiki

// Our labels along the x-axis
var years = [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050];
// For drawing the lines
var africa = [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478];
var asia = [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267];
var europe = [168, 170, 178, 190, 203, 276, 408, 547, 675, 734];
var latinAmerica = [40, 20, 10, 16, 24, 38, 74, 167, 508, 784];
var northAmerica = [6, 3, 2, 2, 7, 26, 82, 172, 312, 433];

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: years,
    datasets: [{
        data: africa,
        label: 'Africa',
        borderColor: "#3e95cd",
        fill: false,
      },
      {
        data: asia,
        label: "Asia",
        borderColor: "#8e5ea2",
        fill: false
      }, {
        data: europe,
        label: "Europe",
        borderColor: "#3cba9f",
        fill: false
      }, {
        data: latinAmerica,
        label: "Latin America",
        borderColor: "#e8c3b9",
        fill: false
      }, {
        data: northAmerica,
        label: "North America",
        borderColor: "#c45850",
        fill: false
      }
    ]
  }
});

var numberOfRoutesPerGrades = [52, 28, 24, 15, 11, 6, 8, 2];

var grades = ["7a", "7a+", "7b", "7b+", "7c", "7c+", "8a", "8a+"];

var xAxisGrades = {
  type: 'category',
  labels: ["7a", "7a+", "7b", "7b+", "7c", "7c+", "8a", "8a+"]
}

var ctx2 = document.getElementById("myChart2");
var myChart2 = new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: grades,
    datasets: [{
      data: numberOfRoutesPerGrades,
      label: 'Ascents',
      backgroundColor: 'RGB(147, 196, 125)',
    }]
  },
  options: {
      scales: {
        yAxes: [{
          ticks: {
            // min: 0,
            // stepSize: 1,
            fontColor: "white",
            // fontSize: 14
          },
          // gridLines: {
          //   display:true,
          //   color: "#white",
          //   // lineWidth: 2,
          //   zeroLineColor: "#white",
          //   // zeroLineWidth: 2
          // },
          // stacked: true
        }],
        xAxes: [{
          ticks: {
            fontColor: "white",
            // fontSize: 14
          },
          // gridLines: {
          //   display:true,
          //   color: "transparent",
          //   // lineWidth: 2
          // }
        }]
      }}
});