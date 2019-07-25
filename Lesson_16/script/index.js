window.addEventListener('DOMContentLoaded', function() {
  'use strict';

  //таймер
  const countTimer = (deadline) => {
    let timerHours = document.querySelector('#timer-hours'),
      timerMinutes = document.querySelector('#timer-minutes'),
      timerSeconds = document.querySelector('#timer-seconds');

    const getTimeRemaining = () => {
      let dateStop = new Date(deadline).getTime(),
        dateNow = new Date().getTime(),
        timeRemaining = (dateStop - dateNow) / 1000,
        seconds = Math.floor(timeRemaining % 60),
        minutes = Math.floor((timeRemaining / 60) % 60),
        hours = Math.floor(timeRemaining / 60 / 60);
        return {timeRemaining, hours, minutes, seconds};
    }

    const getForm = (obj) => {
      for (let key in obj) {
        let param = String(obj[key]),
          newParam = '';
        if(param.length == 1) {
          newParam = param.replace(`${param}`, `0${param}`);
          obj[key] = newParam;
        }
      };
    }

    const updateClock = () => {
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

    let idInterval = setInterval(updateClock, 1000);
  }

  countTimer('24 july 2019');

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

  //слайдер
  const slider = () => {
    const slide = document.querySelectorAll('.portfolio-item'),
      btn = document.querySelectorAll('.portfolio-btn'),
      dotContainer = document.querySelector('.portfolio-dots'),
      slider = document.querySelector('.portfolio-content');

    const setDots = () => {
      slide.forEach(() => {
        let dots = document.createElement('li');
        dots.classList.add('dot');
        dotContainer.appendChild(dots);
      });
    }

    setDots();

    let currentSlide = 0,
      dot = document.querySelectorAll('.dot'),
      interval;

    const prevSlide = (elem, index, strClass) => elem[index].classList.remove(strClass);

    const nextSlide = (elem, index, strClass) => elem[index].classList.add(strClass);

    const autoPlaySlide = () => {
      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');
      currentSlide++;
      if (currentSlide >= slide.length) currentSlide = 0;
      nextSlide(slide, currentSlide, 'portfolio-item-active');

      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');
    };

    const startSlide = (time = 3000) => interval = setInterval(autoPlaySlide, time);

    const stopSlide = () => clearInterval(interval);

    slider.addEventListener('click', (event) => {
      event.preventDefault();

      let target = event.target;

      if(!target.matches('.portfolio-btn, .dot')) return;

      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');

      if (target.matches('#arrow-right')) currentSlide++;
      else if (target.matches('#arrow-left')) currentSlide--;
      else if (target.matches('.dot')) {
        dot.forEach((elem, index) => {
          if (elem === target) currentSlide = index;
        });
      }

      if (currentSlide >= slide.length) currentSlide = 0;
      if (currentSlide < 0) currentSlide = slide.length - 1;
      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');
    });

    slider.addEventListener('mouseover', (event) => event.target.matches('.portfolio-btn') || event.target.matches('.dot') ? stopSlide() : null);

    slider.addEventListener('mouseout', (event) => event.target.matches('.portfolio-btn') || event.target.matches('.dot') ? startSlide() : null);

    startSlide(1500);

  }

  slider();

  //команда
  const hoverEffect = () => {
    const pict = document.querySelectorAll('.command__photo');
    pict.forEach(item => {
      let first = '';
      item.addEventListener('mouseenter', (event) => {
        first = event.target.src;
        event.target.src = event.target.dataset.img;
      });
      item.addEventListener('mouseleave', (event) => event.target.src = first);
    });
  }

  hoverEffect();

  //валидация формы
  const numValid = () => {
    const numInput = document.querySelectorAll('.calc-item');
    numInput.forEach(item => {
      let attr = item.getAttribute('type');
      if(attr === 'number') {
        item.addEventListener('input', (e) => {
          item.value = item.value.replace(/\D/gi, '');
        });
      }
    });
  }

  numValid();

});
