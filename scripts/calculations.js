let budgetValue = 0;
let totalExpensesValue = 0;
let balanceColor = "green";


let expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12]
];


for (let i = 0; i < expenseEntries.length; i++) {
  totalExpensesValue += expenseEntries[i][1];

}


function calculateAverageExpense() {
  if (expenseEntries.length === 0) {
    return 0;
  }

  return totalExpensesValue / expenseEntries.length;
}


function calculateBalance() {
  return budgetValue - totalExpensesValue;
}


function updateBalanceColor() {
  const balance = calculateBalance();

  if (balance < 0) {
    balanceColor = "red";
  } else if (balance < budgetValue * 0.25) {
    balanceColor = "orange";
  } else {
    balanceColor = "green";
  }
}


function calculateCategoryExpenses(category) {
  let categoryTotal = 0;

  for (let i = 0; i < expenseEntries.length; i++) {
    if (expenseEntries[i][0] === category) {
      categoryTotal += expenseEntries[i][1];
    }
  }

  return categoryTotal;
}


function calculateLargestCategory() {
  const categories = [
    "groceries",
    "restaurants",
    "transport",
    "home",
    "subscriptions"
  ];

  const categoriesData = [];

  for (let i = 0; i < categories.length; i++) {
    const total = calculateCategoryExpenses(categories[i]);
    categoriesData.push([categories[i], total]);
  }

  let largestCategory = "";
  let largestAmount = 0;

  for (let i = 0; i < categoriesData.length; i++) {
    if (categoriesData[i][1] > largestAmount) {
      largestAmount = categoriesData[i][1];
      largestCategory = categoriesData[i][0];
    }
  }

  return largestCategory;
}

function addExpenseEntry(values) {
  const category = values[0];
  const amount = Number(values[1]);

  expenseEntries.push([category, amount]);
  totalExpensesValue += amount;
}
