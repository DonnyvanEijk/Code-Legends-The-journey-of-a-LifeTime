let questbutton = document.getElementById("questbutton");
let questitems = document.getElementById("questitems");
let currentexp = 0;
let exptext = document.getElementById("currentexp");
let leveltext = document.getElementById("currentlevel");
let level = 0;
let openable = false;
let gold = 0;
let goldtext = document.getElementById("gold");
let questrewardtext = document.getElementById("quest2");
let stickerbook = document.getElementById("stickerbook")
let boekshow = document.getElementById("boekshow");
let music = document.getElementById("music");
let musicmenu = document.getElementById("musicmenu")

let trophys = document.getElementById("trophys");
let trophymenu = document.getElementById("trophymenu")

let stickers = document.getElementById("stickers");
let stickermenu = document.getElementById("stickermenu")
let startingmenu = document.getElementById("startingmenu")

function changeMenu() {
	startingmenu.style.opacity = "0"
}

let audioPage1 = new Audio();
audioPage1.src = "../music/silly_tutorial_music.mp3";
audioPage1.play();

//variabelen :((()))





//shopitems 













//boekcode






questbutton.addEventListener("click", function () {
	
	questitems.style.opacity = "1"




})


//shopitems laten appearen
let store = document.getElementById("shop");
let storeitems = document.getElementById("shopitems");
let xbutton = document.getElementById("xbutton");
let toggle = false


store.addEventListener("click", function() {
if(toggle == false){
storeitems.style.display = "block";
toggle = true
} else {
 storeitems.style.display = "none";
 toggle = false;
  
   
}

})





//questcode

questitems.addEventListener("click", function () {
	questitems.style.opacity = "0"
})


var pattern1 = ['c', 'l', 'o', 'c', 'k'];
let baronquest = document.getElementById("quest1")
var current1 = 0;
var container1 = document.getElementById(".gamecontainer");
let claimed1;
let claimed2;
let claimed3;
let quest1done = false;

let completedbaron = false;
var keyHandler1 = function (event) {
	//zorg ervoor dat de pattern zichtbaar wordt

	if (pattern1.indexOf(event.key) < 0 || event.key !== pattern1[current1]) {
		current1 = 0;
		return;
	}


	current1++;


	if (pattern1.length === current1) {
		if(quest1done == true) {
			baronquest.innerHTML = "Je hebt deze quest al voltooid!"

		}
		


		if (openable = true && quest1done == false) {
			baronquest.innerHTML = "Find the original code for the professor"
			claimed1 = "claimable"
			console.log("yes?")
			quest1done = true;
		}



	}

};

document.addEventListener('keydown', keyHandler1, false);










//rewardcodes

var pattern2 = ['5', 'e', '1', 'e', 'o'];
let aardappeltest = false
var current2 = 0;
let rewards;

var container2 = document.getElementById(".gamecontainer");
var keyHandler2 = function (event) {
	//zorg ervoor dat de pattern zichtbaar wordt

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




//krijg rewards van de quest met toggles
questrewardtext.addEventListener("click", function () {

	if (claimed1 == "unclaimable") {
		
	}
	else if (questbaronclaim = false) {
		console.log("nee")
	}

	if ( claimed2 == "unclaimable" ) {
	
		claimed2 = "claimable"
	}


	if ( claimed3 == "unclaimable" ) {
	
		claimed3 =  "claimable"
	}
	else if (questbaronclaim = false) {
		console.log("nee")
	}

	baronquest.innerHTML = "There are no avaiable quest right now"
	questbaronclaim = false
	questrewardtext.style.display = "none"






})




//audiofiles variables






//quest codes


//settingsvolume


let volumes = document.getElementById("volumebuttons")
let volume0 = document.getElementById("volume0")
let volume1 = document.getElementById("volume1")
let volume2 = document.getElementById("volume2")
let volume3 = document.getElementById("volume3")
let volume4 = document.getElementById("volume4")
let volume5 = document.getElementById("volume5")
let volume6 = document.getElementById("volume6")
let volume7 = document.getElementById("volume7")
let volume8 = document.getElementById("volume8")
let volume9 = document.getElementById("volume9")
let volume10 = document.getElementById("volume10")
let settingsbutton = document.getElementById("settingsbutton")
let settings = document.getElementById("settings")
let xbox = document.getElementById("xbox")






//settings animatie en xbutton systeem
settingsbutton.addEventListener("click", function () {
	if (settings.style.right = "150rem") {
		settings.style.animation = "settings-slide 2s"
		settings.style.animationFillMode = "forwards"
	}
})



xbox.addEventListener("click", function () {
	console.log("closing")
	settings.style.right = "150rem"
	settings.style.animation = "";
})



































