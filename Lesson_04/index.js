'use strict';

let income = 'работающий парень',
  mission = 10000001,
  period = 12;

let money = prompt('Ваш месячный доход?', 'сумма в рублях');

let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');

let deposit = confirm('Есть ли у вас депозит в банке?');

let showTypeof = function (item) {
  console.log(item, typeof item);
};
showTypeof(money);
showTypeof(income);
showTypeof(deposit);


let costs1 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
let quantity1 = prompt('Во сколько это обойдется?');

let costs2 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
let quantity2 = prompt('Во сколько это обойдется?');

let getExpensesMonth = function (x, y) {
  return x + y;
};

let getAccumulatedMonth = function () {
  let AccumulatedMonth = money - getExpensesMonth(+quantity1, +quantity2);
  return AccumulatedMonth;
};
console.log('getAccumulatedMonth', getAccumulatedMonth());

let getTargetMonth = function (a, b) {
  let period = Math.floor(a/b);
  return period;
};
console.log('getTargetMonth', getTargetMonth(mission, getAccumulatedMonth()));

let budgetMonth = money - +quantity1 - +quantity2;

let budgetDay = budgetMonth/30;

function getStatusIncome () {
  if (budgetDay >= 800) {
    return 'Высокий уровень дохода';
  } else if ((budgetDay >= 300) && (budgetDay < 800)) {
    return 'Средний уровень дохода';
  } else if ((budgetDay >= 0) && (budgetDay < 300)) {
    return 'Низкий уровень дохода';
  } else {return 'что то пошло не так';}
}
console.log('getStatusIncome(): ', getStatusIncome());
