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
var pattern1 = ['g', 'o', 'u', 'd'];
let baronquest = document.getElementById("quest1")
var current1 = 0;
var container1 = document.getElementById(".gamecontainer");
let claimed1;
let claimed2;
let claimed3;

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
			baronquest.innerHTML = "Quest: Vind het goud van de baron door de correcte code in te voeren"
			claimed1 = "claimable"
		}



	}

};

document.addEventListener('keydown', keyHandler1, false);










//rewardcodes

var pattern2 = ['d', 'a', 'r', 'c', 'i'];
let aardappeltest = false
var current2 = 0;
let rewards;
let quest1done = false
var container2 = document.getElementById(".gamecontainer");
var keyHandler2 = function (event) {
	//zorg ervoor dat de pattern zichtbaar wordt

	if (pattern2.indexOf(event.key) < 0 || event.key !== pattern2[current2]) {
		current2 = 0;
		return;
	}


	current2++;


	if (pattern2.length === current2) {
		completedbaron = true
		if (claimed1 == "claimable" && quest1done  == false) {
			questrewardtext.innerHTML = "Click here to claim your rewards!!"
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


let questbaronclaim = true

//krijg rewards van de quest met toggles
questrewardtext.addEventListener("click", function () {

	if (claimed1 == "unclaimable") {
		gold = gold + 100;
		goldtext.innerText = gold;
		openable = true;
		questbaronclaim = false
		currentexp = currentexp + 100;
		claimed1 = "claimable"
	}
	else if (questbaronclaim = false) {
		console.log("nee")
	}

	if ( claimed2 == "unclaimable" ) {
		gold = gold + 200;
		goldtext.innerText = gold;
		openable = true;
		questbaronclaim = false
		currentexp = currentexp + 200;
		chapter1reward.play();
		chapter1reward.volume = 0.3
		chapter1.pause();
		claimed2 = "claimable"
	}


	if ( claimed3 == "unclaimable" ) {
		gold = gold + 600;
		goldtext.innerText = gold;
		openable = true;
		questbaronclaim = false
		currentexp = currentexp + 500;
		chapter2reward.play();
		chapter2reward.volume = 0.3
		chapter2.pause()
		claimed3 =  "claimable"
	}
	else if (questbaronclaim = false) {
		console.log("nee")
	}

	baronquest.innerHTML = "There are no avaiable quest right now"
	questbaronclaim = false
	questrewardtext.style.display = "none"




	exptext.innerHTML = currentexp;
	if (currentexp >= 99 && lvl1clamed == false ) {
		level = level + 1;
		leveltext.innerText = level
		lvl1clamed = true
	

	}
	if (currentexp >= 299 && lvl2claimed == false) {
		level = level + 1;
		leveltext.innerText = level
		lvl2claimed = true

	}


})




//audiofiles variables


let chapter1 = new Audio("./chapters/chapter 1.mp3")
let chapter1reward = new Audio("./chapters/reward1.mp3")
let chapter2 = new Audio("./chapters/chapter2.mp3")
let chapter2reward = new Audio("./chapters/chapter2reward.mp3")
var audiotoggle = "yes";
let lvl1clamed = false;
let lvl2claimed = false
let quest2done = false
let endingvoice = new Audio("./chapters/ending.mp3")
      chapter2.volume = "0.5"
let ending = document.getElementById("ending")

chapter2reward.addEventListener("ended", function() {

console.log("yes");
ending.style.opacity = "1";
endingvoice.play();
ending.style.zIndex = "7000"

})


//quest codes

chapter1.addEventListener("ended", function () {


	var pattern3 = ['e', 'a', 's', 't', 'e', 'r'];

	var current3 = 0;

	var keyHandler3 = function (event) {
		//zorg ervoor dat de pattern zichtbaar wordt

		if (pattern3.indexOf(event.key) < 0 || event.key !== pattern3[current3]) {
			current3 = 0;
			return;
		}


		current3++;


		if (pattern3.length === current3) {
			
			if (quest2done == false) {
				baronquest.innerHTML = "Secret chapter 1: Vind de oude kaart voor de baron in CodeVille"
				baronquest.style.display = "block"
				claimed2 = "claimable"





			}
			else {
				baronquest.innerHTML = "Je hebt deze Quest al voltooid"
			}






		}

	};


	document.addEventListener('keydown', keyHandler3, false);
//rewards
	var pattern2 = ['z', 'a', 'n', 'd'];
	
	var current2 = 0;
	
	var keyHandler2 = function (event) {
		//zorg ervoor dat de pattern zichtbaar wordt

		if (pattern2.indexOf(event.key) < 0 || event.key !== pattern2[current2]) {
			current2 = 0;
			return;
		}


		current2++;


		if (pattern2.length === current2) {

			
			if (claimed2 == "claimable" && quest2done == false) {
				console.log("kaas")
				questrewardtext.innerHTML = "Click here to claim your rewards!!"
				questrewardtext.style.display = "block"
				claimed2 = "unclaimable";
				quest2done = true



			}








		}

	};
	document.addEventListener('keydown', keyHandler2, false);




});



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







volume0.addEventListener("click", function () {
	chapter1.volume = "0"
	chapter1reward.volume = "0"
	chapter2.volume = "0"
	finalemusicbaron.volume = "0"
	chapter2reward.volume = "0"
	
})

volume1.addEventListener("click", function () {
	chapter1.volume = "0.1"
	chapter1reward.volume = "0.1"
	chapter2.volume = "0.1"
	finalemusicbaron.volume = "0.1"
	chapter2reward.volume = "0.1"
})



volume2.addEventListener("click", function () {
	chapter1.volume = "0.2"
	chapter1reward.volume = "0.2"
	chapter2.volume = "0.2"
	finalemusicbaron.volume = "0.2"
	chapter2reward.volume = "0.2"

})



volume3.addEventListener("click", function () {
	chapter1.volume = "0.3"
	chapter1reward.volume = "0.3"
	chapter2.volume = "0.3"
	finalemusicbaron.volume = "0.3"
	chapter2reward.volume = "0.3"

})



volume4.addEventListener("click", function () {
	chapter1.volume = "0.4"
	chapter1reward.volume = "0.4"
	chapter2.volume = "0.4"
	finalemusicbaron.volume = "0.4"
	chapter2reward.volume = "0.4"
	

})



volume5.addEventListener("click", function () {
	chapter1.volume = "0.5"
	chapter1reward.volume = "0.5"
	chapter2.volume = "0.5"
	finalemusicbaron.volume = "0.5"
	chapter2reward.volume = "0.5"
})



volume6.addEventListener("click", function () {
	chapter1.volume = "0.6"
	chapter1reward.volume = "0.6"
	chapter2.volume = "0.6"
	finalemusicbaron.volume = "0.6"
	chapter2reward.volume = "0.6"
})



volume7.addEventListener("click", function () {
	chapter1.volume = "0.7"
	chapter1reward.volume = "0.7"
	chapter2.volume = "0.7"
	finalemusicbaron.volume = "0.7"
	chapter2reward.volume = "0.7"
	

})



volume8.addEventListener("click", function () {
	chapter1.volume = "0.8"
	chapter1reward.volume = "0.8"
	chapter2.volume = "0.8"
	finalemusicbaron.volume = "0.8"
	chapter2reward.volume = "0.8"
})



volume9.addEventListener("click", function () {
	chapter1.volume = "0.9"
	chapter1reward.volume = "0.9"
	chapter2.volume = "0.9"
	finalemusicbaron.volume = "0.9"
	chapter2reward.volume = "0.9"
})



volume10.addEventListener("click", function () {
	chapter1.volume = "1"
	chapter1reward.volume = "1"
	chapter2.volume = "1"
	finalemusicbaron.volume = "1"
	chapter2reward.volume = "1"
})















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

//toggle voor de baronquestst

var pattern8 = ['b', 'a', 'r', 'o', 'n'];
	
var current8 = 0;

var keyHandler8 = function (event) {
	//zorg ervoor dat de pattern zichtbaar wordt

	if (pattern8.indexOf(event.key) < 0 || event.key !== pattern8[current8]) {
		current8 = 0;
		return;
	}


	current8++;


	if (pattern8.length === current8) {

		
		if(quest2done == true){
			
			chapter2.play();
			chapter1reward.pause()
			chapter1.pause();
			
		}
		




if(quest2done == false){
	chapter1.play();
}







	}

};
document.addEventListener('keydown', keyHandler8, false);


	

let quest3done = false
	
chapter2.addEventListener("ended", function() {
	//quest 2
	var pattern1 = ['v', 'o', 'o', 'r', 'h', 'e', 't', 'g', 'r', 'i', 'j', 'p', 'e', 'n'];
	let baronquest = document.getElementById("quest1")
	var current1 = 0;
	
	
	
	
	
	var keyHandler1 = function (event) {
		//zorg ervoor dat de pattern zichtbaar wordt
	
		if (pattern1.indexOf(event.key) < 0 || event.key !== pattern1[current1]) {
			current1 = 0;
			return;
		}
	
	
		current1++;
	
	
		if (pattern1.length === current1) {
			if(quest3done == true) {
				baronquest.innerHTML = "Je hebt deze quest al voltooid!"
	
			}
			
	
	
			if (openable = true && quest3done == false) {
				baronquest.innerHTML = "Quest: Secret Chapter 2: Ga op zoek naar de geheimen van de goudmijn met behulp avn de kaart"
				claimed3 = "claimable"
			}
	
	
	
		}
	
	};
	
	document.addEventListener('keydown', keyHandler1, false);



	//reward finale
	var pattern2 = ['k', 'o', 'm', 'p', 'e', 'l'];
	
	var current2 = 0;
	
	var keyHandler2 = function (event) {
		//zorg ervoor dat de pattern zichtbaar wordt

		if (pattern2.indexOf(event.key) < 0 || event.key !== pattern2[current2]) {
			current2 = 0;
			return;
		}


		current2++;


		if (pattern2.length === current2) {

			
			if (claimed3 == "claimable" && quest3done == false) {
				console.log("kaas")
				questrewardtext.innerHTML = "Click here to claim your rewards!!"
				questrewardtext.style.display = "block"
				claimed3 = "unclaimable";
				quest3done = true



			}








		}

	};
	document.addEventListener('keydown', keyHandler2, false);


	
	

})


//shopmenu
let xshop1 = document.getElementById("xbutton1")
let xshop2 = document.getElementById("xbutton2")




xshop1.addEventListener("click", function() {


	musicmenu.style.display  = "none"
	
})


xshop2.addEventListener("click", function() {


	
	trophymenu.style.display = "none"
	
})

































