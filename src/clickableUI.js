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
let finalemusicbaron = new Audio("./music/Final Castle - Newer Super Mario Bros. DS Music - Extended.mp3")
let trophys = document.getElementById("trophys");
let trophymenu = document.getElementById("trophymenu")

let stickers = document.getElementById("stickers");
let stickermenu = document.getElementById("stickermenu")


//variabelen :((()))





//shopitems 

music.addEventListener("click", function() {
	storeitems.style.display = "none"
	musicmenu.style.display = "block"
	
	
})


trophys.addEventListener("click", function() {
	storeitems.style.display = "none"
	trophymenu.style.display = "block"

	
})









//boekcode

let boektoggle = false


boekshow.addEventListener("click", function() {
	boekshow.style.display = "none"
})
stickerbook.addEventListener("click", function() {
	boekshow.style.display = "block"
})




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

//questcode
// var pattern1 = ['g', 'o', 'u', 'd'];
// let baronquest = document.getElementById("quest1")
// var current1 = 0;
// var container1 = document.getElementById(".gamecontainer");
// let claimed1;
// let claimed2;
// let claimed3;

// let completedbaron = false;
// var keyHandler1 = function (event) {
// 	//zorg ervoor dat de pattern zichtbaar wordt

// 	if (pattern1.indexOf(event.key) < 0 || event.key !== pattern1[current1]) {
// 		current1 = 0;
// 		return;
// 	}


// 	current1++;


// 	if (pattern1.length === current1) {
// 		if(quest1done == true) {
// 			baronquest.innerHTML = "Je hebt deze quest al voltooid!"

// 		}
		


// 		if (openable = true && quest1done == false) {
// 			baronquest.innerHTML = "Quest: Vind het goud van de baron door de correcte code in te voeren"
// 			claimed1 = "claimable"
// 		}



// 	}

// };

// document.addEventListener('keydown', keyHandler1, false);










//rewardcodes

// var pattern2 = ['d', 'a', 'r', 'c', 'i'];
// let aardappeltest = false
// var current2 = 0;
// let rewards;
// let quest1done = false
// var container2 = document.getElementById(".gamecontainer");
// var keyHandler2 = function (event) {
// 	//zorg ervoor dat de pattern zichtbaar wordt

// 	if (pattern2.indexOf(event.key) < 0 || event.key !== pattern2[current2]) {
// 		current2 = 0;
// 		return;
// 	}


// 	current2++;


// 	if (pattern2.length === current2) {
// 		completedbaron = true
// 		if (claimed1 == "claimable" && quest1done  == false) {
// 			questrewardtext.innerHTML = "Click here to claim your rewards!!"
// 			questrewardtext.style.display = "block"
// 			claimed1 = "unclaimable";
// 			if (rewards == false) {
// 				rewards = true;
// 			}
// 			quest1done = true



// 		}








// 	}

// };


// document.addEventListener('keydown', keyHandler2, false);




//krijg rewards van de quest met toggles
// questrewardtext.addEventListener("click", function () {

// 	if (claimed1 == "unclaimable") {
// 		gold = gold + 100;
// 		goldtext.innerText = gold;
// 		openable = true;
// 		questbaronclaim = false
// 		currentexp = currentexp + 100;
// 		claimed1 = "claimable"
// 	}
// 	else if (questbaronclaim = false) {
// 		console.log("nee")
// 	}

// 	if ( claimed2 == "unclaimable" ) {
// 		gold = gold + 200;
// 		goldtext.innerText = gold;
// 		openable = true;
// 		questbaronclaim = false
// 		currentexp = currentexp + 200;
// 		chapter1reward.play();
// 		chapter1reward.volume = 0.3
// 		chapter1.pause();
// 		claimed2 = "claimable"
// 	}


// 	if ( claimed3 == "unclaimable" ) {
// 		gold = gold + 600;
// 		goldtext.innerText = gold;
// 		openable = true;
// 		questbaronclaim = false
// 		currentexp = currentexp + 500;
// 		chapter2reward.play();
// 		chapter2reward.volume = 0.3
// 		chapter2.pause()
// 		claimed3 =  "claimable"
// 	}
// 	else if (questbaronclaim = false) {
// 		console.log("nee")
// 	}

// 	baronquest.innerHTML = "There are no avaiable quest right now"
// 	questbaronclaim = false
// 	questrewardtext.style.display = "none"




// 	exptext.innerHTML = currentexp;
// 	if (currentexp >= 99 && lvl1clamed == false ) {
// 		level = level + 1;
// 		leveltext.innerText = level
// 		lvl1clamed = true
	

// 	}
// 	if (currentexp >= 299 && lvl2claimed == false) {
// 		level = level + 1;
// 		leveltext.innerText = level
// 		lvl2claimed = true

// 	}


// })




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



































