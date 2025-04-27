// Optional: You can control speed, stop, etc. here
// In this basic version, animation is handled by CSS
const container = document.querySelector('.carousel__container');
const pauseBtn = document.getElementById('pause');
const playBtn = document.getElementById('play');

pauseBtn.addEventListener('click', () => {
  container.style.animationPlayState = 'paused';
});

playBtn.addEventListener('click', () => {
  container.style.animationPlayState = 'running';
});
const container = document.querySelector('.carousel__container');
let angle = 0;

document.getElementById('next').addEventListener('click', () => {
  angle -= 72; // Rotate by -72 degrees (next)
  container.style.transform = `rotateY(${angle}deg)`;
});

document.getElementById('prev').addEventListener('click', () => {
  angle += 72; // Rotate by +72 degrees (prev)
  container.style.transform = `rotateY(${angle}deg)`;
});
