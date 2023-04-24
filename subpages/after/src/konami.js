var pattern = ['c', 'a', 'r', 'c'];
var current = 0;
var container = document.getElementById(".gamecontainer");
var keyHandler = function (event) {
//visualization pattern

	if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]) {
		current = 0;
		return;
	}


	current++;


	if (pattern.length === current) {
		current = 0;
		window.location.href = "./subsites/carc/index.html"
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
		window.location.href = "./index.html"
	}

};

document.addEventListener('keydown', keyHandlerb, false);

var pattern1 = ['p', 'a', 's', 't'];

var keyHandler1 = function (event) {
	//visibility

	if (pattern1.indexOf(event.key) < 0 || event.key !== pattern1[current1]) {
		current1 = 0;
		return;
	}


	current1++;


	if (pattern1.length === current1) {
		
window.location.href = "../../subpages/pirate/index.html"



	}

};

document.addEventListener('keydown', keyHandler1, false);

//rewardcodes

