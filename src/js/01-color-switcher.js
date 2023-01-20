const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.body;

startBtn.addEventListener('click', startColorSwitch);
stopBtn.addEventListener('click', stopColorSwitch);

stopBtn.setAttribute('disabled', true);
let timerId = null;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

function timerForColorSwitch() {
    timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function startColorSwitch() {
    timerForColorSwitch();

    stopBtn.removeAttribute('disabled');
    startBtn.setAttribute('disabled', true);
}

function stopColorSwitch() {
    clearInterval(timerId);

    stopBtn.setAttribute('disabled', true);
    startBtn.removeAttribute('disabled');
}
