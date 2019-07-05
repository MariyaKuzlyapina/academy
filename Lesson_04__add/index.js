'use strict';

let myFunc = function (a) {
  if (typeof a !== 'string') {
    return 'Передана не строка!';
  } else {
    let string = a.trim();
    if (string.length > 30) {
      let tail = string.substring(31);
      let newString = a.replace(tail, '...');
      return newString;
    }
    return string;
  }
}

console.log('55', myFunc(55));
console.log('myFunc():', myFunc('   Пробелы в начале и конце '));
console.log('myFunc():', myFunc('                Пробелы в начале и конце '));
console.log('Длинная строка с более чем 30 символами', myFunc('Длинная строка с более чем 30 символами ну точно больше'));

