const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
};

let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function colorStart(e) {
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);

  e.target.setAttribute('disabled', 'disabled');
}

function colorStop() {
  clearInterval(timerId);
  refs.startBtn.removeAttribute('disabled');
}

refs.startBtn.addEventListener('click', colorStart);
refs.stopBtn.addEventListener('click', colorStop);
