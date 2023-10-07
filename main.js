const logoImage = document.querySelector('.logo');
const rainAudio = document.getElementById('rain-audio');

let isPlaying = false;

logoImage.addEventListener('click', () => {
  if (isPlaying) {
    rainAudio.pause();
    isPlaying = false;
  } else {
    rainAudio.play();
    isPlaying = true;
  }
});