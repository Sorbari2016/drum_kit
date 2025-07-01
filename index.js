// JAVASCRIPT CODE 

// Selec all the drums, and loop through, & addevent listener
const drums = document.querySelectorAll(".drum"); 
const numberOfDrums = drums.length; 

for (let i = 0; i < numberOfDrums; i++) {
    drums[i].addEventListener("click", function() {
        const audio = new Audio("../assets/sound_samples/tom-1.mp3")
        audio.play();
    })
}