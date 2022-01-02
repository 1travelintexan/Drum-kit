window.addEventListener("keydown", (e) => {
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  if (!audio) return; //checks if we have a sound on this key, if not then nothing happens
  audio.currentTime = 0; // if you hit the button quickly, it rewinds to the start to play again
  audio.play();
});
