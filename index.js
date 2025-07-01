// JAVASCRIPT CODE 

// Selec all the drums, and loop through, & addevent listener
const drums = document.querySelectorAll(".drum"); 
const numberOfDrums = drums.length; 


// To detect drum element clicked
for (let i = 0; i < numberOfDrums; i++) {
    drums[i].addEventListener("click", function() {

        const buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML); 
        buttonAnimation(buttonInnerHTML); 
    })
}


// To play the sound tapped
function makeSound(key) {
    switch (key) {
        case "w":
        const tom1Audio = new Audio("../assets/sound_samples/tom-1.mp3")
        tom1Audio.play(); 
        break;
        case "a":
        const tom2Audio = new Audio("../assets/sound_samples/tom-2.mp3")
        tom2Audio.play(); 
        break;
        case "s":
        const tom3Audio = new Audio("../assets/sound_samples/tom-3.mp3")
        tom3Audio.play(); 
        break;
        case "d":
        const tom4Audio = new Audio("../assets/sound_samples/tom-4.mp3")
        tom4Audio.play(); 
        break;
        case "j":
        const snareAudio = new Audio("../assets/sound_samples/snare.mp3")
        snareAudio.play(); 
        break;
        case "k":
        const crashAudio = new Audio("../assets/sound_samples/crash.mp3")
        crashAudio.play(); 
        break;
        case "l":
        const kickAudio = new Audio("../assets/sound_samples/kick-bass.mp3")
        kickAudio.play(); 
        break;  
    }     
}


// To detect key being pressed.
document.addEventListener("keydown", function(event) {
        
    makeSound(event.key); 
    buttonAnimation(event.key); 

})

// Create animation when drum is played.

function buttonAnimation(currentkey) {
  const activeButton = document.querySelector("."+ currentkey); 
  activeButton.classList.add("pressed")

// Add a timeframe for the reverse
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}