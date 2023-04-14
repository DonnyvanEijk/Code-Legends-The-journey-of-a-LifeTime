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


