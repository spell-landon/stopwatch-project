//*---------------------------------------*/
//*-------------- constants --------------*/
//*---------------------------------------*/
let minutes = 0;
let seconds = 0;
let tens = 0;

let Interval;

//*---------------------------------------*/
//*------ cached element references ------*/
//*---------------------------------------*/
// time references
const pageTens = document.querySelector('#tens');
const pageSeconds = document.querySelector('#seconds');
const pageMinutes = document.querySelector('#minutes');
// button references
const startBtn = document.querySelector('#start-btn');
const stopBtn = document.querySelector('#stop-btn');
const resetBtn = document.querySelector('#reset-btn');

//*---------------------------------------*/
//*----------- event listeners -----------*/
//*---------------------------------------*/
startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

//*---------------------------------------*/
//*-------------- functions --------------*/
//*---------------------------------------*/
function startTimer() {
  clearInterval(Interval);
  Interval = setInterval(startTimer, 10);

  tens++;
  if (tens <= 9) {
    pageTens.textContent = '0' + tens;
  }
  if (tens > 9) {
    pageTens.textContent = tens;
  }
  if (tens > 99) {
    seconds++;
    pageSeconds.textContent = '0' + seconds;
    tens = 0;
    pageTens.textContent = '0' + 0;
  }
  if (seconds > 9) {
    pageSeconds.textContent = seconds;
  }
  if (seconds > 59) {
    minutes++;
    pageMinutes.textContent = '0' + minutes;
    seconds = 0;
    pageSeconds.textContent = '0' + 0;
  }
  if (minutes > 59) {
    pageTens.textContent = '0' + tens;
    pageSeconds.textContent = '0' + 0;
    pageMinutes.textContent = '0' + 0;
  }
}
function resetTimer() {
  clearInterval(Interval);
  pageMinutes.textContent = '0' + 0;
  pageSeconds.textContent = '0' + 0;
  pageTens.textContent = '0' + 0;
}

function stopTimer() {
  clearInterval(Interval);
}
