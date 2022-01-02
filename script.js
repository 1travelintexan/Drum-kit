function playSound(e) {
  //targets the audio element with the data-key code
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  console.log(e.keyCode);
  //targets the element with class key and with the data-key code
  const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
  //checks if we have a sound on this key, if not then nothing happens
  if (!audio) return;
  // if you hit the button quickly, it rewinds to the start to play again
  audio.currentTime = 0;
  //plays the audio sound from html page
  audio.play();
  //adds a class to change the border color and size of key
  key.classList.add("playing");
}

//function to check and then remove the transition
function removeTransition(e) {
  // check if the key is actually transforming and if not then skip it
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

//listener to remove the transitions after it is done transforming
const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransition);
});

//listener to play the sound on each key
window.addEventListener("keydown", playSound);
