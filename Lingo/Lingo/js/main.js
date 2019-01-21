//=============================
// Bronnen
// stackoverflow.com
// w3schools.com
//=============================

// require('wordArry.js')
//-----------------------------------Variable------------------------------------//
var audio = new Audio('audio/wow.mp3');
var lingoArrayInput = words[Math.floor(Math.random() * words.length)];
var lingoArrayOutput;
var userInput;
var userOutput;
var row1Goed = [];
var row1Fout = [];
var k = 0;
var l = 0;
// var input = document.createElement("input");
// var button = document.getElementById('checkButton');
var container = document.createElement("div");
// var buttonCreate = document.createElement("button");
var letterContainer = document.createElement('div');
document.body.appendChild(container);
// container.appendChild(input);
// input.classList.add("inputWord");
// input.setAttribute('placeholder', 'Voer je antwoord in');
container.classList.add("container");
//===============================================================================//


//--------------------------Opmaak Lingo-------------------------//

letterContainer.classList.add('letterContainer');
container.appendChild(letterContainer);

for (var a = 1; a <= 5; a++) { //Makes a 5 by 5 grid
	for (var i = 1; i <= 5; i++) {
		var letterbox = document.createElement('div');
		letterbox.classList.add('letterbox');
		letterContainer.appendChild(letterbox);
		letterbox.setAttribute('id', 'letterbox' + i + a);
	}
}
//================================================================//

lingoArrayOutput = lingoArrayInput.split(""); //Takes the 'word' from the array and splits it.
lingoArrayOutput2 = lingoArrayInput.split(""); //backupp of the Array
document.getElementById("letterbox11").innerHTML = (lingoArrayOutput[0]); //Shows the first letter of the word
console.log(lingoArrayInput);


//----------------------Compare 2 arrays with each other by letter------------------------//


function check() {
	userInput = document.getElementById('inputWord').value.toLowerCase();
	userOutput = userInput.split(""); //Turns the user word into an array



	for (i = 0; i < 5; i++) {
		document.getElementById('letterbox' + (i + 1) + (k + 1)).innerHTML = (userOutput[i]);
		if (lingoArrayOutput[i] == userInput[i]) {
			row1Goed[i] = lingoArrayOutput[i];
			// document.getElementById('letterbox' + (i + 1) + (k + 1)).innerHTML = (lingoArrayOutput[i]);
			document.getElementById('letterbox' + (i + 1) + (k + 1)).style.backgroundColor = "#00b70c";
			lingoArrayOutput2[i] = null;
		}
		else {
			row1Fout[i] = userInput[i];
		}
	}
	k++;
	checkLetter();

	if (lingoArrayInput == userInput) {
		audio.play();
		alert("WOW goed heur! \n\nHet koste je " + (l) + " poging(en) om het spel uit te spelen\n\nNog een keer spelen?  klik dan op 'OK'");
		location.reload();
	}
	if (l == 5) {
		alert("Dit was je laatse kans!");
		alert("Het woord was:  " + lingoArrayInput);
		location.reload();
	}
}


//----Compares all incorrect letters with different letters in the array----//
function checkLetter() {
	for (j = 0; j < row1Fout.length; j++) {
		if (row1Fout[j] != null && lingoArrayOutput2.indexOf(row1Fout[j]) > -1) {
			// document.getElementById('letterbox' + (j + 1) + (l + 1)).innerHTML = (userOutput[j]);
			document.getElementById('letterbox' + (j + 1) + (l + 1)).style.backgroundColor = "#FFD700";
		}
		else if (row1Fout[j] != null) {
		}
	}
	l++;
}
//===========================================================================//