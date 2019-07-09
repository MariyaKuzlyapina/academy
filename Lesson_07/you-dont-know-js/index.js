'use strict';

let books = document.querySelectorAll('.books');
let book = document.querySelectorAll('.book');

books[0].insertBefore(book[1], book[0]);
books[0].insertBefore(book[4], book[3]);
books[0].appendChild(book[2]);

let body = document.querySelector('body');

body.setAttribute('style', 'background-image: url(./image/you-dont-know-js.jpg);');

let title = book[4].querySelector('a').textContent = 'Книга 3. this и Прототипы Объектов';

let adv = body.querySelector('.adv');
body.removeChild(adv);

let list = book[0].querySelectorAll('ul');
let point = list[0].querySelectorAll('li');
list[0].insertBefore(point[6], point[4]);
list[0].insertBefore(point[8], point[4]);
list[0].insertBefore(point[2], point[10]);

let list5 = book[5].querySelectorAll('ul');
let point5 = list5[0].querySelectorAll('li');
list5[0].insertBefore(point5[9], point5[3]);
list5[0].insertBefore(point5[2], point5[6]);
list5[0].insertBefore(point5[5], point5[8]);

let list6 = book[2].querySelectorAll('ul');
let point6 = list6[0].querySelectorAll('li');
let newNode = point6[8].cloneNode(true);
list6[0].insertBefore(newNode, point6[9]).textContent = "Глава 8: За пределами ES6";

