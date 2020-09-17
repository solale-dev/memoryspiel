let secondCount = 0;
let stopWatch;

const displayPara = document.querySelector('.clock');
function displayCount() {
  let hours = Math.floor(secondCount / 3600);
  let minutes = Math.floor((secondCount % 3600) / 60);
  let seconds = Math.floor(secondCount % 60);
  let displayHours = (hours < 10) ? '0' + hours : hours;
  let displayMinutes = (minutes < 10) ? '0' + minutes : minutes;
  let displaySecounds = (seconds < 10) ? '0' + seconds : seconds;
  displayPara.textContent = displayHours + ':' + displayMinutes + ':' + displaySecounds;
  secondCount++;
}
const startBtn= document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');
startBtn.addEventListener('click', () => {
  stopWatch = setInterval(displayCount, 1000);
  resetWatch = setInterval(displayCount, 1000);
  function myFonction() {
    clearInterval(stopWatch);
    startBtn.disabled = false
  }
  //startBtn.disabled = true
});
/*
stopBtn.addEventListener('click', () => {
  clearInterval(stopWatch);
  startBtn.disabled = false
});

resetBtn.addEventListener('click', () => {
  secondCount = 0;
  displayCount();
});
*/
displayCount();
/* Zeitanzeige
function displayTime() {
  let date = new Date();
  let Time = date.toLocaleTimeString();
  document.querySelector('.clock').textContent = Time;
}
displayTime();
const createcClock = setInterval(displayTime, 1000);
*/