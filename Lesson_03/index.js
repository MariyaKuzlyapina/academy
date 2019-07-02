'use strict';

let money = 90000,
  income = 'работающий парень',
  addExpenses = 'Фриланс, Торговля, Такси',
  deposit = false,
  mission = 10000001,
  period = 12;

console.log('money', typeof money);

console.log('income', typeof income);

console.log('deposit', typeof deposit);

console.log('income length', income.length);

console.log('Период' + ' ' + period + ' ' + 'месяцев');

console.log('Цель заработать' + ' ' + mission + ' ' + 'рублей');

console.log(addExpenses.toLowerCase().split(', '));

let budgetDay = money / 30;
console.log('budgetDay', budgetDay);
console.log('budgetDay', budgetDay % 30);

money = prompt('Ваш месячный доход?', 'сумма в рублях');
console.log('money', money);

addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
console.log('addExpenses', addExpenses.split(', '));

let question = prompt('Есть ли у вас депозит в банке?', 'ответ \'да\' или \нет\'');
switch (question.length) {
  case 3:
    deposit;
    break;
  case 2:
    deposit = true;
    break;
}
console.log('deposit', deposit);

console.log(typeof money, typeof income, typeof deposit);

let costs1 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
let quantity1 = prompt('Во сколько это обойдется?');

let costs2 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
let quantity2 = prompt('Во сколько это обойдется?');

let budgetMonth = +quantity1 + +quantity2 + 1000; //на вкусняшки тыщу
console.log('budgetMonth', budgetMonth, typeof budgetMonth);

console.log(Math.ceil(mission/budgetMonth));

budgetDay = budgetMonth/30;
console.log('budgetDay', Math.floor(budgetDay));

if (budgetDay >= 800) {
  console.log('Высокий уровень дохода');
} else if ((budgetDay >= 300) && (budgetDay < 800)) {
  console.log('Средний уровень дохода');
} else if ((budgetDay >= 0) && (budgetDay < 300)) {
  console.log('Низкий уровень дохода');
} else {console.log('то то пошло не так');}
