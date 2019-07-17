'use strict';

let buttonStart = document.querySelector('#start'),
  buttonCancel = document.querySelector('#cancel'),
  data = document.querySelector('.data'),
  control = document.querySelector('.control'),
  plus = data.querySelectorAll('button'),
  plusIncome = plus[0],
  plusExpenses = plus[1],
  addIncome = document.querySelectorAll('.additional_income-item'),
  inputBudgetDay = document.querySelector('.budget_day-value'),
  inputBudgetMonth = document.querySelector('.budget_month-value'),
  inputExpensesMonth = document.querySelector('.expenses_month-value'),
  inputAccumulateMonth = document.querySelector('.accumulated_month-value'),
  inputAddIncome = document.querySelector('.additional_income-value'),
  inputAddExpenses = document.querySelector('.additional_expenses-value'),
  inputIncomePeriod = document.querySelector('.income_period-value'),
  inputTargetMonth = document.querySelector('.target_month-value'),
  inputBudget = document.querySelector('.salary-amount'),
  incomeItems = document.querySelectorAll('.income-items'),
  inputAddIncomeItems = document.querySelectorAll('.additional_income-item'),
  expensesItems = document.querySelectorAll('.expenses-items'),
  inputAddExpensesItem = document.querySelector('.additional_expenses-item'),
  inputPeriodSelect = document.querySelector('.period-select'),
  periodAmount = document.querySelector('.period-amount'),
  inputTargetAmount = document.querySelector('.target-amount'),
  checkbox = document.querySelector('#deposit-check'),
  depositBank = document.querySelector('.deposit-bank'),
  depositAmount = document.querySelector('.deposit-amount'),
  depositPercent = document.querySelector('.deposit-percent');

const AppData = function() {
  this.budget = 0;
  this.income = {};
  this.incomeMonth = 0;
  this.addIncome = [];
  this.expenses = {};
  this.addExpenses = [];
  this.deposit = false;
  this.percentDeposit = 0;
  this.moneyDeposit = 0;
  this.budgetDay = 0;
  this.budgetMonth = 0;
  this.expensesMonth = 0;
};

AppData.prototype.start = function () {
  this.budget = +inputBudget.value;
  this.getExpenses();
  this.getIncome();
  this.getExpensesMonth();
  this.getInfoDeposit();
  this.getAddExpenses();
  this.getAddIncome();
  this.getBudget();
  this.showResult();
};

AppData.prototype.showResult = function() {
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
};

AppData.prototype.addExpensesBlock = function () {
  let cloneExpensesItem = expensesItems[0].cloneNode(true);
  expensesItems[0].parentNode.insertBefore(cloneExpensesItem, plusExpenses);
  expensesItems = document.querySelectorAll('.expenses-items');
  if(expensesItems.length === 3) {
    plusExpenses.style.display = 'none';
  }
};

AppData.prototype.addIncomeBlock = function () {
  let cloneIncomeItem = incomeItems[0].cloneNode(true);
  incomeItems[0].parentNode.insertBefore(cloneIncomeItem, plusIncome);
  incomeItems = document.querySelectorAll('.income-items');
  if (incomeItems.length === 3) {
    plusIncome.style.display = 'none';
  }
};

AppData.prototype.getIncome = function() {
  incomeItems.forEach(function(item) {
    let itemIncome = item.querySelector('.income-title').value;
    let cashIncome = item.querySelector('.income-amount').value;
    if (itemIncome !== '' && cashIncome !== '') {
      appData.income[itemIncome] = +cashIncome;
    }
  })

  for (let key in this.income) {
    this.incomeMonth += +this.income[key];
  }
};

AppData.prototype.getExpenses = function() {
  expensesItems.forEach(function(item) {
    let itemExpenses = item.querySelector('.expenses-title').value;
    let cashExpenses = item.querySelector('.expenses-amount').value;
    if (itemExpenses !== '' && cashExpenses !== '') {
      appData.expenses[itemExpenses] = +cashExpenses;
    }
  });
};

AppData.prototype.getAddExpenses = function() {
  let addExpenses = inputAddExpensesItem.value.split(',');
  addExpenses.forEach(function(item) {
    item = item.trim();
    if (item !== '') {
      appData.addExpenses.push(item);
    }
  });
};

AppData.prototype. getAddIncome = function() {
  inputAddIncomeItems.forEach(function(item) {
    let itemValue = item.value.trim();
    if (itemValue !== '') {
      appData.addIncome.push(itemValue);
    }
  })
};

AppData.prototype.getExpensesMonth = function () {
  for (let key in this.expenses) {
    this.expensesMonth += +this.expenses[key];
  }
  return this.expensesMonth;
};

AppData.prototype.getBudget = function () {
  this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth + (this.moneyDeposit * this.percentDeposit)/12;
  if (this.budgetMonth/30 < 0) {
    this.budgetMonth = 'Что то пошло не так';
  } else {return  this.budgetDay = this.budgetMonth/30;}

  return this.budgetMonth;
};

AppData.prototype.getTargetMonth = function () {
  if (this.budgetMonth > 0) {
    return Math.ceil(inputTargetAmount.value / this.budgetMonth);
  } else return null;
};

AppData.prototype.getInfoDeposit = function() {
  if(this.deposit) {
    do {
      this.percentDeposit = depositPercent.value;
    }
    while ( isNaN(this.percentDeposit) || this.percentDeposit == '' || this.percentDeposit == null);
    do {
      this.moneyDeposit = depositAmount.value;
    }
    while ( isNaN(this.moneyDeposit) || this.moneyDeposit == '' || this.moneyDeposit == null);
  }
};

AppData.prototype.calcPeriod = function() {
  if (this.budgetMonth > 0) {
    return this.budgetMonth * inputPeriodSelect.value;
  } else return null;
};

AppData.prototype.expensesAll = function() {
  let array = [];
  for (let elem in this.expenses) {
    let first = elem.substring(0, 1);
    let bigFirst = first.toUpperCase();
    let newElem = elem.replace(first, bigFirst);
    array.push(newElem);
  }
};

AppData.prototype.reset = function() {
  this.income = {};
  this.addIncome = [];
  this.expenses = {};
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

  let arrExpenses = Array.from(expensesItems);
  arrExpenses.forEach(function(input, index, arrExpenses) {
    if (index > 0) {
      arrExpenses[index].remove();
    }
  });
  plusExpenses.style.display = 'block';

  let arrIncome = Array.from(incomeItems);
  arrIncome.forEach(function(input, index, arrIncome) {
    if (index > 0) {
      arrIncome[index].remove();
    }
  });
  plusIncome.style.display = 'block';


  control.replaceChild(buttonStart, buttonCancel);
};

AppData.prototype.eventsListeners = function() {
  buttonStart.addEventListener('click', this.start());
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

  checkbox.addEventListener('change', function() {
    if(checkbox.checked) {
      depositBank.style.display = 'inline-block';
      depositAmount.style.display = 'inline-block';
      appData.deposit = 'true';
      depositBank.addEventListener('change', function(){
        let selectIndex = this.options[this.selectedIndex].value;
        if(selectIndex === 'other'){
          depositPercent.style.display = 'inline-block';
          depositPercent.value = '';
        } else {
          depositPercent.style.display = 'none';
          depositPercent.value = selectIndex;
        }
      })
    } else {
      depositBank.style.display = 'none';
      depositAmount.style.display = 'none';
      depositAmount.value = '';
      appData.deposit = 'false';
    }
  })

  buttonCancel.addEventListener('click', appData.reset.bind(appData));
}

let appData = new AppData;
