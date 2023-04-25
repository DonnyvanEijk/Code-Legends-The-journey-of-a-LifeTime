
let robot = new Audio("/music/teaser_futher.mp3");

robot.play();


robot.addEventListener("ended", function() {
    let music = new Audio('/music/future_or_present_music (1).mp3');
    music.play();  
    
    music.volume = "0.2"
    
    let ending = document.getElementById("ending")
    
    
    ending.style.opacity = "1"
})
  



