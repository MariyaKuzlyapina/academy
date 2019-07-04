'use strict';

let income = 'работающий парень',
  mission = 10000001,
  period = 12;

let money = prompt('Ваш месячный доход?', 'сумма в рублях');
console.log('money', money);

let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
console.log('addExpenses', addExpenses.split(', '));

let deposit = confirm('Есть ли у вас депозит в банке?', 'ОК - да, Отмена -нет');

console.log(typeof money, typeof income, typeof deposit);

let costs1 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
let quantity1 = prompt('Во сколько это обойдется?');

let costs2 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
let quantity2 = prompt('Во сколько это обойдется?');

let budgetMonth = money - +quantity1 - +quantity2;
console.log('budgetMonth', budgetMonth);

console.log(Math.ceil(mission/budgetMonth));

let budgetDay = budgetMonth/30;
console.log('budgetDay', Math.floor(budgetDay));

if (budgetDay >= 800) {
  console.log('Высокий уровень дохода');
} else if ((budgetDay >= 300) && (budgetDay < 800)) {
  console.log('Средний уровень дохода');
} else if ((budgetDay >= 0) && (budgetDay < 300)) {
  console.log('Низкий уровень дохода');
} else {console.log('то то пошло не так');}
