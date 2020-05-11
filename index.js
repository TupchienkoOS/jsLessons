let money = prompt("Ваш бюджет на місяць");
let time = prompt("Введіть дату в форматі YYYY-MM-DD");

let appData = {
  budget: money,
  timeData: time,
  expenses: "",
  optionalExpenses: "",
  income: "",
  savings: false,
};

let nesessaryExpensesName = prompt(
  "Ввеідть обов'язкову статтю витрат в цьому місяці"
);
let nesessaryExpensesCost = prompt("У скільки обійдеться");

let expenses = { nesessaryExpensesName: nesessaryExpensesCost };

alert(appData.budget / 30);
