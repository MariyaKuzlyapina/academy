'use strict';

let money,
  costs,
  quantity,
  start = function () {
    do {
      money = prompt('Ваш месячный доход?');
      console.log(money);
    }
    while (isNaN(money) || money == '' || money == null);
    console.log(money);
  }

  start();

let appData = {
  budget: money,
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  mission: 500000,
  period: 3,
  asking: function() {
    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
      appData.addExpenses = addExpenses.toLowerCase().split(',');
      appData.deposit = confirm('Есть ли у вас депозит в банке?');

      for (let i = 0; i < 2; i++) {
        costs = prompt('Какие обязательные ежемесячные расходы у вас есть?');

        quantity = prompt('Во сколько это обойдется?');

        while (isNaN(quantity) || quantity == '' || quantity == null) {
          quantity = prompt('Во сколько это обойдется?');
        };
        appData.expenses[costs] = +quantity;
      }
  },
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  getExpensesMonth: function () {
    for (let key in appData.expenses) {
      appData.expensesMonth += appData.expenses[key];
    }
    return appData.expensesMonth;
  },

  getBudget: function () {
    appData.budgetMonth = +appData.budget - appData.expensesMonth;

    (function () {
      if (appData.budgetMonth/30 < 0) {
        return 'Что то пошло не так';
      } else {return  appData.budgetDay = appData.budgetMonth/30;}
    }) ();
    return appData.budgetMonth;
  },

  getTargetMonth: function (a, b) {
    appData.period = Math.floor(a/b);
    if ( appData.period < 0) {
      return 'Цель не будет достигнута'
    } else {
      return ['Цель будет достигнута за', appData.period, 'месяцев'];
    }
  },

  getStatusIncome: function (elem) {
    if (elem >= 800) {
      return 'Высокий уровень дохода';
    } else if ((elem >= 300) && (elem < 800)) {
      return 'Средний уровень дохода';
    } else if ((elem >= 0) && (elem < 300)) {
      return 'Низкий уровень дохода';
    } else {return 'что то пошло не так';}
  },
};
appData.asking();

appData.getExpensesMonth();

console.log('Расходы за месяц', appData.expensesMonth);

console.log(appData.getTargetMonth(appData.mission, appData.getBudget()).join(' '));

console.log('Уровень дохода:', appData.getStatusIncome(appData.budgetDay));

for ( let elem in appData ) {
  console.log('Наша программа включает в себя данные: ', appData[elem]);
}
