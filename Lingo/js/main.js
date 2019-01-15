var words = [
	"appel",
	"aldus",
	"afwas",
	"aftel",
	"aarde",
	"armen",
	"actie",
	"apart",
	"adres",
	"avond",
	"aders",
	"alarm",
	"boten",
	"balen",
	"beter",
	"bomen",
	"boren",
	"boven",
	"boxen",
	"brood",
	"broek",
	"brand",
	"breed",
	"benen",
	"beeld",
	"brief",
	"beten",
	"basis",
	"blauw",
	"beren",
	"buren",
	"banen",
	"bloed",
	"broer",
	"blond",
	"boter",
	"beleg",
	"breng",
	"baken",
	"beker",
	"blind",
	"bezig",
	"baden",
	"bedel",
	"bazen",
	"bazin",
	"baren",
	"beden",
	"beken",
	"bezem",
	"baard",
	"bidet",
	"breuk",
	"conus",
	"cello",
	"creme",
	"cloud",
	"cacao",
	"cadet",
	"cavia",
	"ceder",
	"combi",
	"china",
	"clown",
	"draai",
	"deden",
	"dalen",
	"derde",
	"delen",
	"dwaas",
	"daden",
	"dader",
	"dames",
	"diner",
	"datum",
	"dozen",
	"dreun",
	"duits",
	"dagen",
	"deren",
	"dwerg",
	"dwaal",
	"dwing",
	"druil",
	"droog",
	"draad",
	"dweil",
	"drank",
	"duren",
	"dwars",
	"drugs",
	"daten",
	"daler",
	"doorn",
	"disco",
	"degen",
	"droom",
	"dient",
	"drone",
	"dadel",
	"duwen",
	"druif",
	"deken",
	"deler",
	"elven",
	"eigen",
	"enger",
	"engel",
	"elder",
	"enkel",
	"effen",
	"email",
	"egaal",
	"fiets",
	"friet",
	"files",
	"forel",
	"films",
	"feest",
	"fruit",
	"falen",
	"flora",
	"fauna",
	"feeen",
	"freak",
	"forum",
	"fusie",
	"geven",
	"gaven",
	"groen",
	"graai",
	"getal",
	"grens",
	"grond",
	"groef",
	"graal",
	"gewei",
	"games",
	"grote",
	"groet",
	"garen",
	"gebak",
	"graag",
	"genre",
	"glans",
	"geluk",
	"geeuw",
	"horen",
	"heren",
	"halen",
	"hagel",
	"haren",
	"helen",
	"harde",
	"hemel",
	"hoofd",
	"huren",
	"hamer",
	"haken",
	"heden",
	"hotel",
	"hobby",
	"heler",
	"hoger",
	"ieder",
	"index",
	"immer",
	"icoon",
	"inlog",
	"inzet",
	"innig",
	"jovel",
	"jaren",
	"jicht",
	"jabot",
	"jacht",
	"jaden",
	"jagen",
	"jager",
	"japon",
	"jarig",
	"jawel",
	"jeans",
	"jemig",
	"jeugd",
	"joint",
	"jonas",
	"joule",
	"koken",
	"kreet",
	"koker",
	"kerst",
	"kegel",
	"koude",
	"kader",
	"krent",
	"kamer",
	"kaars",
	"kaart",
	"kraan",
	"krant",
	"keren",
	"kruid",
	"kerel",
	"kubus",
	"kraal",
	"kleur",
	"kroon",
	"klein",
	"korst",
	"klopt",
	"kabel",
	"kunst",
	"kopje",
	"krans",
	"klimt",
	"kater",
	"klink",
	"kudde",
	"kruis",
	"lopen",
	"laten",
	"lepel",
	"links",
	"laden",
	"leven",
	"lezen",
	"lucht",
	"lenen",
	"laser",
	"lente",
	"licht",
	"lader",
	"leder",
	"lunch",
	"lijst",
	"leger",
	"leden",
	"legen",
	"lagen",
	"lezer",
	"lever",
	"lingo",
	"loper",
	"luier",
	"lager",
	"leeuw",
	"maand",
	"malen",
	"maken",
	"media",
	"meter",
	"motor",
	"maten",
	"markt",
	"mazen",
	"molen",
	"meest",
	"meren",
	"model",
	"meden",
	"maden",
	"macht",
	"meeuw",
	"mager",
	"magen",
	"maren",
	"manen",
	"noord",
	"nieuw",
	"negen",
	"namen",
	"neven",
	"nodig",
	"naden",
	"neder",
	"nemen",
	"onder",
	"optel",
	"ovaal",
	"ovale",
	"onwel",
	"optie",
	"orden",
	"oppas",
	"ouder",
	"ophef",
	"oases",
	"palen",
	"plein",
	"pegel",
	"paars",
	"prijs",
	"piano",
	"pixel",
	"paden",
	"pasta",
	"pizza",
	"poten",
	"paard",
	"puber",
	"pauze",
	"preek",
	"polis",
	"pater",
	"proef",
	"panda",
	"penis",
	"prins",
	"pluto",
	"polen",
	"plint",
	"quota",
	"quant",
	"quark",
	"queue",
	"quilt",
	"quote",
	"robot",
	"reken",
	"raden",
	"regen",
	"radio",
	"rente",
	"regio",
	"rugby",
	"reden",
	"roken",
	"ruzie",
	"ruist",
	"regel",
	"racen",
	"races",
	"riool",
	"ramen",
	"radar",
	"roman",
	"rokje",
	"razen",
	"roede",
	"staan",
	"staal",
	"speel",
	"steeg",
	"stoel",
	"stook",
	"steek",
	"schep",
	"spijs",
	"stoep",
	"shirt",
	"samen",
	"sites",
	"sport",
	"spalk",
	"sjaal",
	"storm",
	"staat",
	"steun",
	"strak",
	"serie",
	"shows",
	"schat",
	"snoep",
	"sfeer",
	"smeer",
	"speer",
	"scene",
	"speld",
	"smeed",
	"smaak",
	"super",
	"stand",
	"steer",
	"smelt",
	"sedan",
	"skier",
	"sluis",
	"sneer",
	"steel",
	"truck",
	"terug",
	"typen",
	"talen",
	"taboe",
	"tegel",
	"taart",
	"tafel",
	"trouw",
	"teken",
	"teren",
	"taken",
	"treur",
	"tenen",
	"titel",
	"thuis",
	"tiara",
	"teder",
	"toets",
	"tabak",
	"trein",
	"tarwe",
	"telen",
	"teler",
	"uiten",
	"uilig",
	"uitje",
	"uiver",
	"ultra",
	"uniek",
	"uppie",
	"uraan",
	"uiers",
	"velen",
	"vloer",
	"video",
	"varen",
	"vegen",
	"veren",
	"vader",
	"vaten",
	"vuren",
	"vrouw",
	"vlees",
	"vogel",
	"vroeg",
	"vezel",
	"veins",
	"vorst",
	"veder",
	"vanaf",
	"vieze",
	"veger",
	"villa",
	"veler",
	"vrede",
	"vries",
	"woord",
	"wagen",
	"wonen",
	"waren",
	"warme",
	"weten",
	"water",
	"weren",
	"wazig",
	"wegen",
	"weven",
	"wezen",
	"weken",
	"wraak",
	"wilde",
	"wreed",
	"wrede",
	"wenst",
	"woest",
	"xenon",
	"yacht",
	"yucca",
	"zwaar",
	"zware",
	"zesde",
	"zagen",
	"zalig",
	"zomer",
	"zeden",
	"zwart",
	"zeven",
	"zicht",
	"zadel",
	"zweet",
	"zenuw",
	"zweer",
	"zweef",
	"zaden",
	"zaken",
	"zeker",
	"zever",
	"zeeen"];



var lingoArrayInput = words[Math.floor(Math.random() * words.length)];
var lingoArrayOutput;
var userInput;
var userOutput;


//------------------------Styles the page------------------------//
var container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

var text = document.createElement('p');
var textvalue = document.createTextNode(lingoArrayInput);
text.setAttribute('id', 'title');
text.appendChild(textvalue);
container.appendChild(text);

var playerinput = document.createElement('input');
container.appendChild(playerinput);
playerinput.setAttribute('id', 'inputWord');
playerinput.setAttribute('placeholder', 'Type je woord hier');
playerinput.setAttribute('maxLength', '5');

var lettercontainer = document.createElement('div');
lettercontainer.classList.add('lettercontainer');
container.appendChild(lettercontainer);

for (var a = 1; a <= 5; a++) { //Makes a 5 by 5 grid
	for (var i = 1; i <= 5; i++) {
		var letterbox = document.createElement('div');
		letterbox.classList.add('letterbox');
		lettercontainer.appendChild(letterbox);
		letterbox.setAttribute('id', 'letterbox' + i + a);
	}
}
//--------------------------------------------------------------//


lingoArrayOutput = lingoArrayInput.split(""); //Takes the 'word' from the array and splits it.
document.getElementById("letterbox11").innerHTML = (lingoArrayOutput[0]); //Shows the first letter of the word







//----------------------Compare 2 arrays with each other by letter------------------------//

function check() {
	userInput = document.getElementById('inputWord').value; 
	userOutput = userInput.split(""); //Turns the user word into an array

	//____________letter 1____________//
	if (lingoArrayOutput[0] == userInput[0]) {
		console.log('goed');
		document.getElementById("letterbox11").innerHTML = (lingoArrayOutput[0]);
		letterbox11.style.backgroundColor = "green";
		lingoArrayOutput[0] = null;
	}
	else {
		console.log('fout');
		checkLetter(userInput[0], 11);
	}

	//____________letter 2____________//

	if (lingoArrayOutput[1] == userInput[1]) {
		console.log('goed');
		document.getElementById("letterbox21").innerHTML = (lingoArrayOutput[1]);
		letterbox21.style.backgroundColor = "green";
		lingoArrayOutput[1] = null;
	}
	else {
		console.log('fout');
		checkLetter(userInput[1], 21);
	}

	//____________letter 3____________//
	if (lingoArrayOutput[2] == userInput[2]) {
		console.log('goed');
		document.getElementById("letterbox31").innerHTML = (lingoArrayOutput[2]);
		letterbox31.style.backgroundColor = "green";
		lingoArrayOutput[2] = null;
	}
	else {
		console.log('fout');
		checkLetter(userInput[2], 31);
	}

	//____________letter 4____________//
	if (lingoArrayOutput[3] == userInput[3]) {
		console.log('goed');
		document.getElementById("letterbox41").innerHTML = (lingoArrayOutput[3]);
		letterbox41.style.backgroundColor = "green";
		lingoArrayOutput[3] = null;
	}
	else {
		console.log('fout');
		checkLetter(userInput[3], 41);
	}

	//____________letter 5____________//
	if (lingoArrayOutput[4] == userInput[4]) {
		console.log('goed');
		document.getElementById("letterbox51").innerHTML = (lingoArrayOutput[4]);
		letterbox51.style.backgroundColor = "green";
		lingoArrayOutput[4] = null;
	}
	else {
		console.log('fout');
		checkLetter(userInput[4], 51);
	}

	//some debugging
	console.log('userInput is = ' + userInput);
	console.log('userOutput is = ' + userOutput);
	console.log('lingoArrayInput is = ' + lingoArrayInput);
	console.log('lingoArrayOutput is = ' + lingoArrayOutput);
}
//----------------------------------------------------------------------------//





//----Compares all incorrect letters with different letters in the array----//
function checkLetter(letter, waarde) {
	for (i = 1; i <= 5; i++) {
		if (letter == lingoArrayOutput[i]) {
			console.log('goedGEEL');
			console.log(waarde);
			letterbox[waarde].style.backgroundColor = "yello";
		}
		else {
			console.log('foutROOD');
			console.log(letter);
		}
	}
}
//---------------------------------------------------------------------------//

