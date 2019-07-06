'use strict';

let arr = ['12345', '54321', '987654', '456789', '50081', '980456', '208080'];

let selectArr = function (array) {
  for (let i of array) {
    if ((i[0] == '2') || (i[0] == '4')) {
      console.log('начинаются с 2 или 4:', i);
    }
  }
};

selectArr(arr);

let simpleNum = function () {
  for (let i = 0; i < 100; i++) {
    let del = 0;
    for (let n = i; n >= 1; n--) {
      if (i % n == 0) {
        del ++;
      }
    }
    if (del == 2) {
      console.log('Делители этого числа', 1, 'и', i);
    }
  }
}
simpleNum();

