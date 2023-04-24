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
var pattern1 = ['y', 'a', 'r', 'r'];


var keyHandler1 = function (event) {
	//visibility

	if (pattern1.indexOf(event.key) < 0 || event.key !== pattern1[current1]) {
		current1 = 0;
		return;
	}


	current1++;


	if (pattern1.length === current1) {

piratetalk.src = "../../music/start_pirate (1).mp3"
if(quest1yesyes == false){
piratetalk.play();
baronquest.innerHTML = "Find the map for Barbosa"
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

var pattern2 = ['l', 'a', 'n', 'd','i', 'n', 's', 'i','g', 'h', 't',];
let current2 = 0;
var keyHandler2 = function (event) {
	//visibility

	if (pattern2.indexOf(event.key) < 0 || event.key !== pattern2[current2]) {
		current2 = 0;
		return;
	}


	current2++;


	if (pattern2.length === current2 && quest1yesyes == true) {
let piratetalk2 = new Audio();
piratetalk2.src = "../../chapters/pirate2_mattie.mp3"
if(quest1yesyes == true){
piratetalk2.play();
baronquest.innerHTML = "Click here for more information!"
quest1yesyes = "done";
}
piratetalk2.addEventListener("play", function() {
	pirate.pause();
}) 
piratetalk2.addEventListener("ended", function() {
	pirate.play();


	
}) 

piratetalk2.addEventListener("play", function() {
	piratetalk.pause();
})




	}

};

document.addEventListener('keydown', keyHandler2, false);



var pattern3 = ['s', 'l', 'e', 'e', 'p'];

var keyHandler3 = function (event) {
	//visibility

	if (pattern3.indexOf(event.key) < 0 || event.key !== pattern3[current3]) {
		current3 = 0;
		return;
	}


	current3++;


	if (pattern3.length === current3) {

if(quest1yesyes == "done"){

window.location.href = "../../subpages/amogus/index.html"

}


	}

};

document.addEventListener('keydown', keyHandler3, false);