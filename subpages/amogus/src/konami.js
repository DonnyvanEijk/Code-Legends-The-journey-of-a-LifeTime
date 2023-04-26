var pattern = ['c', 'a', 'r', 'c'];
var current = 0;
var container = document.getElementById(".gamecontainer");
let quest1yesyes = false;
var keyHandler = function (event) {
//visualization pattern

	if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]) {
		current = 0;
		return;
	}


	current++;


	if (pattern.length === current) {
		current = 0;
		window.location.href = "../../subsites/carc/index.html"
	}

};

document.addEventListener('keydown', keyHandler, false);



var patternb = ['b', 'a', 'c', 'k'];
var currentb = 0;
var containerb = document.getElementById(".gamecontainer");
var keyHandlerb = function (event) {
//visibility

	if (patternb.indexOf(event.key) < 0 || event.key !== patternb[currentb]) {
		currentb = 0;
		return;
	}


	currentb++;


	if (patternb.length === currentb) {
		currentb = 0;
		window.location.href = "../../index.html"
	}

};

document.addEventListener('keydown', keyHandlerb, false);
let piratetalk = new Audio();
var pattern1 = ['s', 'u', 's', 's', 'y'];

var keyHandler1 = function (event) {
	//visibility

	if (pattern1.indexOf(event.key) < 0 || event.key !== pattern1[current1]) {
		current1 = 0;
		return;
	}


	current1++;


	if (pattern1.length === current1) {

piratetalk.src = "../../chapters/on_island.mp3"
if(quest1yesyes == false){
piratetalk.play();
baronquest.innerHTML = "Lets go find the stuff for Barbosa!"
quest1yesyes = true;
}
piratetalk.addEventListener("play", function() {
	pirate.pause();
}) 
piratetalk.addEventListener("ended", function() {
	pirate.play();


	
}) 



	}

};

document.addEventListener('keydown', keyHandler1, false);

//rewardcodes

var pattern2 = ['2', '6', '1'];
let current2 = 0;
var keyHandler2 = function (event) {
	//visibility

	if (pattern2.indexOf(event.key) < 0 || event.key !== pattern2[current2]) {
		current2 = 0;
		return;
	}


	current2++;


	if (pattern2.length === current2 && quest1yesyes == true) {

window.location.href = "../../subpages/VoiceLineEnd/index.html"


	}

};

document.addEventListener('keydown', keyHandler2, false);