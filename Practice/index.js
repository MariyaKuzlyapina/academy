'use strict';

let money,
  start = function () {
    do {
      money = prompt('Ваш месячный доход?');
    }
    while (isNaN(money) || money == '' || money == null);
  }

  start();

let appData = {
  budget: money,
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  mission: 500000,
  period: 3,
  asking: function() {
    if(confirm('Есть ли у вас дополнительный источник заработка?')) {
      let itemIncome;
      do {
        itemIncome = prompt('Какой у вас дополнительный заработок?', 'Фриланс');
      }
      while ( !isNaN(itemIncome) || itemIncome == '' || itemIncome == null);

      let cashIncome;
      do {
        cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', 15000);
      }
      while ( isNaN(cashIncome) || cashIncome == '' || cashIncome == null);

      appData.income[itemIncome] = cashIncome;
    }

    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
      appData.addExpenses = addExpenses.toLowerCase().split(',');
      appData.deposit = confirm('Есть ли у вас депозит в банке?');

      for (let i = 0; i < 2; i++) {
        let costs;
        do {
          costs = prompt('Какие обязательные ежемесячные расходы у вас есть?');
        }
        while( !isNaN(costs) || costs == '' || costs == null);

        let quantity;
        do {
          quantity = prompt('Во сколько это обойдется?');
        }
        while (isNaN(quantity) || quantity == '' || quantity == null);

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

    if (appData.budgetMonth/30 < 0) {
      appData.budgetMonth = 'Что то пошло не так';
    } else {return  appData.budgetDay = appData.budgetMonth/30;}

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
  getInfoDeposit: function() {
    if(appData.deposit) {
      do {
        appData.percentDeposit = prompt('Какой годовой процент?', '10');
      }
      while ( isNaN(appData.percentDeposit) || appData.percentDeposit == '' || appData.percentDeposit == null);

      do {
        appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
      }
      while ( isNaN(appData.moneyDeposit) || appData.moneyDeposit == '' || appData.moneyDeposit == null);
    }
  },
  calcSavedMoney: function() {
    return appData.budgetMonth * appData.period;
  },
  expensesAll: function() {
    let array = [];
    for (let elem in appData.expenses) {
      let first = elem.substring(0, 1);
      let bigFirst = first.toUpperCase();
      let newElem = elem.replace(first, bigFirst);
      array.push(newElem);
    }
    console.log('Массив всех возможных расходов: ', array.join(', '));
  }
};

appData.asking();
appData.getExpensesMonth();
appData.expensesAll();

console.log('Расходы за месяц', appData.expensesMonth);

console.log(appData.getTargetMonth(appData.mission, appData.getBudget()).join(' '));

console.log('Уровень дохода:', appData.getStatusIncome(appData.budgetDay));

for ( let key in appData ) {
  console.log('Наша программа включает в себя данные: ' + key + ' ' + appData[key]);
}
