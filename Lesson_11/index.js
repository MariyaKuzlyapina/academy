'use strict';

const buttonStart = document.querySelector('#start'),
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
    const inputs = data.querySelectorAll('input');
    for (let input of inputs) {
      const attribute = input.getAttribute('type');
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
      const selectIndex = this.options[this.selectedIndex].value;
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
