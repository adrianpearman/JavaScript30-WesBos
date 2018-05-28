function playSound(e) {
  console.log(e); // this returns the keydown object
  console.log(e.keyCode); // this returns the keycode 
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  //THIS RETURNS AUDIO VALUE AND RETURN NULL IF NOT ON LIST
  console.log(audio);
  // THIS STOPS THE FUNCTION FROM RUNNING ALL TOGHETHER
  if (!audio) return;
  // WILL RETURN TO THE START
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing')
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return
  // console.log(this)
  this.classList.remove('playing')
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);
