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
