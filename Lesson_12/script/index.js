window.addEventListener('DOMContentLoaded', function() {
  'use strict';

  //таймер
  function countTimer(deadline) {
    let timerHours = document.querySelector('#timer-hours'),
      timerMinutes = document.querySelector('#timer-minutes'),
      timerSeconds = document.querySelector('#timer-seconds');

    updateClock();
    let idInterval = setInterval(updateClock, 1000);

    function getTimeRemaining() {
      let dateStop = new Date(deadline).getTime(),
        dateNow = new Date().getTime(),
        timeRemaining = (dateStop - dateNow) / 1000,
        seconds = Math.floor(timeRemaining % 60),
        minutes = Math.floor((timeRemaining / 60) % 60),
        hours = Math.floor(timeRemaining / 60 / 60);
        return {timeRemaining, hours, minutes, seconds};
    }

    function getForm(obj) {
      for (let key in obj) {
        let param = String(obj[key]),
          newParam = '';
        if(param.length == 1) {
          newParam = param.replace(`${param}`, `0${param}`);
          obj[key] = newParam;
        }
      };
    }

    function updateClock() {
      let timer = getTimeRemaining();
      getForm(timer);
      timerHours.textContent = timer.hours;
      timerMinutes.textContent = timer.minutes;
      timerSeconds.textContent = timer.seconds;
      if(timer.timeRemaining < 0){
        timerHours.textContent = '00';
        timerMinutes.textContent = '00';
        timerSeconds.textContent = '00';
        clearInterval(idInterval);
      }
    }

  }

  countTimer('21 july 2019');

})


