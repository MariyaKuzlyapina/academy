'use strict';

import '@babel/polyfill';
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import 'fetch-polyfill';
import 'es6-promise';
import 'formdata-polyfill';

import dropdownMenu from './module/dropdownMenu';

//menu
dropdownMenu();
