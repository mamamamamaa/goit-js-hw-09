// Описан в документации

import flatpickr from 'flatpickr';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';
import 'notiflix/dist/notiflix-3.2.5.min.css';

const ref = {
  btn: document.querySelector('[data-start]'),
  inp: document.querySelector('#datetime-picker'),
  timer: document.querySelector('.timer'),
};

const daysRef = {
  days: ref.timer.querySelector('[data-days]'),
  hours: ref.timer.querySelector('[data-hours]'),
  minutes: ref.timer.querySelector('[data-minutes]'),
  seconds: ref.timer.querySelector('[data-seconds]'),
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() - Date.now() <= 0) {
      //   window.alert('Please choose a date in the future');
      Notify.warning('Please choose a date in the future');
      ref.btn.setAttribute('disabled', 'disabled');
      return;
    }
    ref.btn.removeAttribute('disabled');
  },
};

let timerId = null;

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function pad(param) {
  return String(param).padStart(2, '0');
}

function startParse() {
  const date = new Date(ref.inp.value).getTime();
  timerId = setInterval(() => {
    const { days, hours, minutes, seconds } = convertMs(date - Date.now());

    daysRef.days.textContent = pad(days);
    daysRef.hours.textContent = pad(hours);
    daysRef.minutes.textContent = pad(minutes);
    daysRef.seconds.textContent = pad(seconds);

    if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
      clearInterval(timerId);
      Notify.success('The end!!!');
    }
  }, 1000);
}

flatpickr('#datetime-picker', options);

ref.btn.addEventListener('click', startParse);
