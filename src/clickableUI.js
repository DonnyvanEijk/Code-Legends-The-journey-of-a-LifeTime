//! PLEASE DONT MIND THE UNUSED VARIABLES !//



//variabelen
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

//startbutton function
function changeMenu() {
	startingmenu.style.display = "none"
	audioPage1.play();
	help.play();
}



questbutton.addEventListener("click", function () {
	
	questitems.style.opacity = "1"




})

//questcode

questitems.addEventListener("click", function () {
	questitems.style.opacity = "0"
})


let baronquest = document.getElementById("quest1")
var current1 = 0;
var container1 = document.getElementById(".gamecontainer");
let claimed1;
let claimed2;
let claimed3;
let quest1done = false;
let completedbaron = false;

//QuestrewardToggles
questrewardtext.addEventListener("click", function () {

	if (claimed1 == "unclaimable") {
		window.location.href = "./subpages/after/index.html";
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


let audioPage1 = new Audio();
audioPage1.src = "./music/silly_tutorial_music.mp3";
let help = new Audio("./music/Start.m4a")

let voiceprof1 = new Audio();
voiceprof1.src = "./music/voicelines/voice_taurus1.mp3"
let pre_lab = new Audio();
pre_lab.src = "./music/Pre-Portal_Lab.mp3"

//audio functions
voiceprof1.addEventListener("ended", function () {
    pre_lab.play()
	voiceprof1.pause()
})

pre_lab.addEventListener("ended", function () {
    pre_lab.play()
})

audioPage1.volume = 0.2;

voiceprof1.volume = 0.2;


pre_lab.volume = 0.2;



















































