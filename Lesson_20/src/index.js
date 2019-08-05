'use strict';

import '@babel/polyfill';
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import 'fetch-polyfill';
import 'es6-promise';
import 'formdata-polyfill';

import countTimer from './module/countTimer';
import toggleMenu from './module/toggleMenu';
import tabs from './module/tabs';
import slider from './module/slider';
import hoverEffect from './module/hoverEffect';
import numValid from './module/numValid';
import sendForm from './module/sendForm';
import togglePopUp from './module/togglePopUp';
import calc from './module/calc';

//таймер
countTimer('24 july 2019');

//menu
toggleMenu();

//табы
tabs();

//слайдер
  slider();

//команда
hoverEffect();

//валидация формы
numValid();

//калькулятор
calc();

//send-ajax-form
sendForm('form1');
sendForm('form2');
sendForm('form3');

//popup
togglePopUp();
