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
	startingmenu.style.opacity = "0"
	audioPage1.play();
}





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


let baronquest = document.getElementById("quest1")
var current1 = 0;
var container1 = document.getElementById(".gamecontainer");
let claimed1;
let claimed2;
let claimed3;
let quest1done = false;
let completedbaron = false;

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
let audioPage1 = new Audio();
audioPage1.src = "../music/silly_tutorial_music.mp3";





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



































