'use strict';

let buttonStart = document.querySelector('#start');
let buttonCancel = document.querySelector('#cancel');

let data = document.querySelector('.data');
let control = document.querySelector('.control');
let plus = data.querySelectorAll('button');
let plusIncome = plus[0];
let plusExpenses = plus[1];

let checkbox = document.querySelector('#deposit-check');

let addIncome = document.querySelectorAll('.additional_income-item');

let inputBudgetDay = document.querySelector('.budget_day-value');
let inputBudgetMonth = document.querySelector('.budget_month-value');
let inputExpensesMonth = document.querySelector('.expenses_month-value');
let inputAccumulateMonth = document.querySelector('.accumulated_month-value');
let inputAddIncome = document.querySelector('.additional_income-value');
let inputAddExpenses = document.querySelector('.additional_expenses-value');
let inputIncomePeriod = document.querySelector('.income_period-value');
let inputTargetMonth = document.querySelector('.target_month-value');

let inputBudget = document.querySelector('.salary-amount');

let incomeItems = document.querySelectorAll('.income-items');

let inputAddIncomeItems = document.querySelectorAll('.additional_income-item');

let expensesItems = document.querySelectorAll('.expenses-items');

let inputAddExpensesItem = document.querySelector('.additional_expenses-item');

let inputPeriodSelect = document.querySelector('.period-select');
let periodAmount = document.querySelector('.period-amount');

let inputTargetAmount = document.querySelector('.target-amount');

let appData = {
  budget: 0,
  income: {},
  incomeMonth: 0,
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  reset: function() {
    this.income ={};
    this.addIncome= [];
    this.expenses= {};
    this.addExpenses = [];
    this.expensesMonth = 0;
    this.budgetMonth = 0;
    this.incomeMonth = 0;

    let allInputs = document.querySelectorAll('input');
    allInputs.forEach(function(input) {
      input.value = '';
      input.removeAttribute('disabled', 'disabled');
    });
    inputPeriodSelect.value = '1';
    periodAmount.textContent = inputPeriodSelect.value;

    control.replaceChild(buttonStart, buttonCancel);
  },
  start: function () {
    this.budget = +inputBudget.value;
    this.getExpenses();
    this.getIncome();
    this.getExpensesMonth();
    this.getAddExpenses();
    this.getAddIncome();
    this.getBudget();
    this.showResult();
  },
  showResult: function() {
    inputBudgetMonth.value = this.budgetMonth;
    inputBudgetDay.value = Math.floor(this.budgetDay);
    inputExpensesMonth.value = this.expensesMonth;
    inputAddExpenses.value = this.addExpenses.join(', ');
    inputAddIncome.value = this.addIncome.join(',');
    inputTargetMonth.value = this.getTargetMonth();
    inputIncomePeriod.value = this.calcPeriod();
    inputPeriodSelect.addEventListener('input', function() {
      inputIncomePeriod.value = appData.calcPeriod();
    });


  },
  addExpensesBlock: function () {
    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, plusExpenses);
    expensesItems = document.querySelectorAll('.expenses-items');
    if(expensesItems.length === 3) {
      plusExpenses.style.display = 'none';
    }
  },
  addIncomeBlock: function () {
    let cloneIncomeItem = incomeItems[0].cloneNode(true);
    incomeItems[0].parentNode.insertBefore(cloneIncomeItem, plusIncome);
    incomeItems = document.querySelectorAll('.income-items');
    if (incomeItems.length === 3) {
      plusIncome.style.display = 'none';
    }
  },
  getIncome: function() {
    incomeItems.forEach(function(item) {
      let itemIncome = item.querySelector('.income-title').value;
      let cashIncome = item.querySelector('.income-amount').value;
      if (itemIncome !== '' && cashIncome !== '') {
        appData.income[itemIncome] = +cashIncome;
      }
    })

    for (let key in appData.income) {
      appData.incomeMonth += +appData.income[key];
    }
  },
  getExpenses: function() {
    expensesItems.forEach(function(item) {
      let itemExpenses = item.querySelector('.expenses-title').value;
      let cashExpenses = item.querySelector('.expenses-amount').value;
      if (itemExpenses !== '' && cashExpenses !== '') {
        appData.expenses[itemExpenses] = +cashExpenses;
      }
    });
  },
  getAddExpenses: function() {
    let addExpenses = inputAddExpensesItem.value.split(',');
    addExpenses.forEach(function(item) {
      item = item.trim();
      if (item !== '') {
        appData.addExpenses.push(item);
      }
    });
  },
  getAddIncome: function() {
    inputAddIncomeItems.forEach(function(item) {
      let itemValue = item.value.trim();
      if (itemValue !== '') {
        appData.addIncome.push(itemValue);
      }
    })
  },
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  getExpensesMonth: function () {
    for (let key in this.expenses) {
      this.expensesMonth += +this.expenses[key];
    }
    return this.expensesMonth;
  },

  getBudget: function () {
    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
    if (this.budgetMonth/30 < 0) {
      this.budgetMonth = 'Что то пошло не так';
    } else {return  this.budgetDay = this.budgetMonth/30;}

    return this.budgetMonth;
  },

  getTargetMonth: function () {
    if (this.budgetMonth > 0) {
      return Math.ceil(inputTargetAmount.value / this.budgetMonth);
    } else return null;
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
    if(this.deposit) {
      do {
        this.percentDeposit = prompt('Какой годовой процент?', '10');
      }
      while ( isNaN(this.percentDeposit) || this.percentDeposit == '' || this.percentDeposit == null);

      do {
        this.moneyDeposit = prompt('Какая сумма заложена?', 10000);
      }
      while ( isNaN(this.moneyDeposit) || this.moneyDeposit == '' || this.moneyDeposit == null);
    }
  },
  calcPeriod: function() {
    if (this.budgetMonth > 0) {
      return this.budgetMonth * inputPeriodSelect.value;
    } else return null;
  },
  expensesAll: function() {
    let array = [];
    for (let elem in this.expenses) {
      let first = elem.substring(0, 1);
      let bigFirst = first.toUpperCase();
      let newElem = elem.replace(first, bigFirst);
      array.push(newElem);
    }
    console.log('Массив всех возможных расходов: ', array.join(', '));
  }
};

buttonStart.addEventListener('click', appData.start.bind(appData));
plusExpenses.addEventListener('click', appData.addExpensesBlock.bind(appData));
plusIncome.addEventListener('click', appData.addIncomeBlock.bind(appData));
inputPeriodSelect.addEventListener('input', function() {
  periodAmount.textContent = inputPeriodSelect.value;
});

if (inputBudget.value === '') {
  buttonStart.setAttribute('disabled', 'disabled');
}
inputBudget.addEventListener('input',function(){
  if(this.value != ''){
      buttonStart.disabled = false;
  }
});

buttonStart.addEventListener('click', function() {
  if (inputBudget.value !== '') {
    let inputs = data.querySelectorAll('input');
    for (let input of inputs) {
      let attribute = input.getAttribute('type');
      if (attribute == 'text') {
        input.setAttribute('disabled', 'disabled');
      }
    };

    buttonCancel.style = 'display: block';
    control.replaceChild(buttonCancel, buttonStart);
  }
});

buttonCancel.addEventListener('click', appData.reset.bind(appData));
