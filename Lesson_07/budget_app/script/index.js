'use strict';

let button = document.querySelector('#start');

let data = document.querySelector('.data');
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

let incomeItems = document.querySelector('.income-items');
let inputIncomeTitle = incomeItems.querySelector('.income-title');
let inputIncomeAmount = incomeItems.querySelector('.income-amount');
let inputAddIncomeItems = document.querySelectorAll('.additional_income-item');
let inputAddIncome01 = inputAddIncomeItems[0];
let inputAddIncome02 = inputAddIncomeItems[1];

let expensesItems = document.querySelector('.expenses-items');
let inputExpensesTitle = expensesItems.querySelector('.expenses-title');
let inputExpensesAmount = expensesItems.querySelector('.expenses-amount');

let inputAddExpensesItem = document.querySelector('.additional_expenses-item');

let inputPeriodSelect = document.querySelector('.period-select');

