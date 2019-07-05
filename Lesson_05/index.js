'use strict';

let income = 'работающий парень',
  mission = 10000001,
  period = 12,
  money,
  costs1,
  costs2,
  quantity;

let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');

let deposit = confirm('Есть ли у вас депозит в банке?');

let start = function () {
  do {
    money = prompt('Ваш месячный доход?');
    console.log(money);
  }
  while (isNaN(money) || money == '' || money == null);
  console.log(money);
}

start();

let showTypeof = function (item) {
  console.log(item, typeof item);
};
showTypeof(money);
showTypeof(income);
showTypeof(deposit);

let getExpensesMonth = function () {
  let sum = 0;
  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      costs1 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Проезд');
    } else if( i === 1 ) {
      costs2 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Еда');
    }

    quantity = prompt('Во сколько это обойдется?');

    while (isNaN(quantity) || quantity == '' || quantity == null) {
      quantity = prompt('Во сколько это обойдется?');
    };

    sum += +quantity;
  }

  return sum;

};

let getAccumulatedMonth = function (i, n) {
  return i - n;
};

let AccumulatedMonth = getAccumulatedMonth(+money, getExpensesMonth());
console.log('AccumulatedMonth', AccumulatedMonth);

let getTargetMonth = function (a, b) {
  let period = Math.floor(a/b);
  if ( period < 0) {
    return 'Цель не будет достигнута'
  } else { return 'Цель будет достигнута'}
};
console.log('getTargetMonth', getTargetMonth(mission, AccumulatedMonth));


let budgetDay = function (f) {
  if (f/30 < 0) {
    return 'Что то пошло не так'
  } else {return f/30};
}
console.log('budgetDay(): ', budgetDay(AccumulatedMonth));

function getStatusIncome (elem) {
  if (elem >= 800) {
    return 'Высокий уровень дохода';
  } else if ((elem >= 300) && (elem < 800)) {
    return 'Средний уровень дохода';
  } else if ((elem >= 0) && (elem < 300)) {
    return 'Низкий уровень дохода';
  } else {return 'что то пошло не так';}
}
console.log('getStatusIncome(): ', getStatusIncome(budgetDay(AccumulatedMonth)));
