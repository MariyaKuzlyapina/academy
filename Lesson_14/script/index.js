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
    const menu = document.querySelector('menu'),
      body = document.querySelector('body');

    const handlerMenu = () => {
      menu.classList.toggle('active-menu');
    };

    body.addEventListener('click', (event) => {
      let target = event.target;
      if(target.closest('.menu')) handlerMenu();
      else if (target.closest('.active-menu')) handlerMenu();
      else menu.classList.remove('active-menu');
    });
  };

  toggleMenu();

  //popup
  const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
      popupBtn = document.querySelectorAll('.popup-btn'),
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
          };

          let idIntervalPosition = setInterval(setPosition, 1);
        }
      });
    });

    popup.addEventListener('click', (event) => {
      let target = event.target;
      if(target.classList.contains('popup-close')) popup.style.display = 'none';
      else {
        target = target.closest('.popup-content');
        if (!target) popup.style.display = 'none';
      }
    });

  };

  togglePopUp();

  //табы
  const tabs = () => {
    const tabHeader = document.querySelector('.service-header'),
      tab = document.querySelectorAll('.service-header-tab'),
      tabContent = document.querySelectorAll('.service-tab');

    const toggleTabContent = (index) => {
      for (let i = 0; i < tabContent.length; i++ ) {
        if (index === i) {
          tab[i].classList.add('active');
          tabContent[i].classList.remove('d-none');
        } else {
          tab[i].classList.remove('active');
          tabContent[i].classList.add('d-none');
        }
      };
    };

    tabHeader.addEventListener('click', (event) => {
      let target = event.target;

      target = target.closest('.service-header-tab');
      if(target) {
        tab.forEach((item, i) => {
          if(item ===target) toggleTabContent(i);
        });
      }
    });
  }

  tabs();

});
