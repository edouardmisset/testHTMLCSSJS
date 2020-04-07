// var myNumber = 2;

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


