var pattern = ['s', 'l', 'e', 'e', 'p'];
var current = 0;
var container = document.getElementById(".gamecontainer");
let audio1 = new Audio("../../music/start_pirate (1).mp3")
var keyHandler = function (event) {
//visualization pattern

	if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]) {
		current = 0;
		return;
	}


	current++;


	if (pattern.length === current) {
		if(claimed1 = "sleep"){
		window.location.href = "../../subpages/amogus/index.html"
		}
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

var pattern1 = ['y', 'a', 'r', 'r'];

var keyHandler1 = function (event) {
	//visibility

	if (pattern1.indexOf(event.key) < 0 || event.key !== pattern1[current1]) {
		current1 = 0;
		return;
	}


	current1++;


	if (pattern1.length === current1) {
		if(quest1done == true) {
			baronquest.innerHTML = "You already finished this!"

		}
		


		if (openable = true && quest1done == false) {
			baronquest.innerHTML = "Find the map for Barbosa"
			claimed1 = "claimable"
			console.log("yes?")
			quest1done = true;
			audio1.play();
			audio1.volume  = "0.4"

			audio1.addEventListener("play", function() {
				pirate.pause();
			})

			
		}



	}

};

document.addEventListener('keydown', keyHandler1, false);

//rewardcodes

var pattern2 = ['l', 'a', 'n', 'd', 'i','n','s','i','g','h','t'];
let aardappeltest = false
var current2 = 0;
let rewards;

var container2 = document.getElementById(".gamecontainer");
var keyHandler2 = function (event) {
	//visibility

	if (pattern2.indexOf(event.key) < 0 || event.key !== pattern2[current2]) {
		current2 = 0;
		return;
	}


	current2++;


	if (pattern2.length === current2) {
		
		if (claimed1 == "claimable" && quest1done  == true) {
			questrewardtext.innerHTML = "Click here for more information!"
			questrewardtext.style.display = "block"
			claimed1 = "unclaimable";
			if (rewards == false) {
				rewards = true;
			}
			quest1done = true
		}
	}
};


document.addEventListener('keydown', keyHandler2, false);



