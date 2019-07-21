window.addEventListener('DOMContentLoaded', function() {
  'use strict';

  //таймер
  function countTimer(deadline) {
    let timerHours = document.querySelector('#timer-hours'),
      timerMinutes = document.querySelector('#timer-minutes'),
      timerSeconds = document.querySelector('#timer-seconds');

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

  countTimer('23 july 2019');

  //menu
  const toggleMenu = () => {
    const btnMenu = document.querySelector('.menu'),
    menu = document.querySelector('menu'),
    closeBtn = document.querySelector('.close-btn'),
    menuItems = menu.querySelectorAll('ul>li');

  const handlerMenu = () => {
    menu.classList.toggle('active-menu');
  };

    btnMenu.addEventListener('click', handlerMenu);
    closeBtn.addEventListener('click', handlerMenu);
    menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));
  };

  toggleMenu();

  //popup
  const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
      popupBtn = document.querySelectorAll('.popup-btn'),
      popUpClose = document.querySelector('.popup-close'),
      popupContent = document.querySelector('.popup-content');


    popupBtn.forEach((elem) => {
      elem.addEventListener('click', () => {
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) popup.style.display = 'block';
        else {
          popup.style.display = 'block';
          popup.style.opacity = '0';
          let position = 0 - popupContent.clientHeight;
          const setPosition = () => {
            popup.style.opacity = '1';
            popupContent.style.top = `${position}px`;
            if (popupContent.getBoundingClientRect().top < 72) position +=1;
            else clearInterval(idIntervalPosition);
          }

          let idIntervalPosition = setInterval(setPosition, 1);
        }
      });
    });

    popUpClose.addEventListener('click', () => popup.style.display = 'none');
  };

  togglePopUp();

})
