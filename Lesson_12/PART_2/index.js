window.addEventListener('DOMContentLoaded', function() {
  'use strict';

  const dayPart = document.querySelector('.day_part'),
    day = document.querySelector('.day'),
    time = document.querySelector('.time'),

    newYear = document.querySelector('.to_new-year');

  class DateNow {
    constructor() {
      this.start();
    }

    start() {
      this.getTime();
      this.getDay();
      this.getDayPart();
      this.getTiming();
    }

    getDay() {
      let smallDay = this.date.toLocaleString('ru', {weekday: 'long'});
      let bigDays = smallDay.replace(smallDay[0], smallDay[0].toLocaleUpperCase());
      day.textContent = bigDays;
    }

    getTime() {
      this.date = new Date();
      time.textContent = this.date.toLocaleTimeString('en');
      setInterval(this.getTime, 1000);
    }

    getDayPart() {
      let hours = this.date.getHours();
      if((hours > 0) && (hours <= 6)) dayPart.textContent = 'Доброй ночи';
      else if ((hours > 6) && (hours <= 12)) dayPart.textContent = 'Добрoe утро';
      else if ((hours > 12) && (hours <= 18)) dayPart.textContent = 'Добрый день';
      else dayPart.textContent = 'Добрый вечер';
    }

    getTiming() {
      const newYers = new Date('31 january 2019');
      let toNewYear =  Math.floor((this.date - newYers) / 1000 / 60 / 60 / 24);
      newYear.textContent = toNewYear;
    }
  }

  let dateNow = new DateNow ();
});
