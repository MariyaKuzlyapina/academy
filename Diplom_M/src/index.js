'use strict';

import '@babel/polyfill';
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import 'fetch-polyfill';
import 'es6-promise';
import 'formdata-polyfill';

import dropdownMenu from './module/dropdownMenu';
import openModal from './module/openModal';
import mainSlider from './module/mainSlider';

//menu
dropdownMenu();

//modal window
openModal('free_visit_form', '.open-popup');
openModal('callback_form', '.callback-btn');
openModal('gift', '.fixed-gift');
mainSlider();