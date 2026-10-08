```javascript
// ==========================================
// SpendWise - JavaScript Foundation
// ==========================================

// 1. Application variables
let monthlyBudget = 80000;
let totalExpenses = 46500;
let remainingBalance = monthlyBudget - totalExpenses;

// Display existing budget information
console.log("===== SpendWise Budget Summary =====");
console.log("Monthly Budget: KSh " + monthlyBudget);
console.log("Total Expenses: KSh " + totalExpenses);
console.log("Remaining Balance: KSh " + remainingBalance);


// ==========================================
// 2. Reusable budget calculation functions
// ==========================================

// Calculate the remaining balance
function calculateBalance(budget, expenses) {
    return budget - expenses;
}

// Calculate the percentage of the budget spent
function calculateSpendingPercentage(budget, expenses) {
    return (expenses / budget) * 100;
}


// ==========================================
// 3. Collect user input
// ==========================================

let userBudget = prompt("Enter your monthly budget in KSh:");
let userExpenses = prompt("Enter your total expenses in KSh:");


// ==========================================
// 4. Convert user input to numbers
// ==========================================

userBudget = Number(userBudget);
userExpenses = Number(userExpenses);


// ==========================================
// 5. Perform calculations
// ==========================================

let userBalance = calculateBalance(userBudget, userExpenses);
let spendingPercentage = calculateSpendingPercentage(
    userBudget,
    userExpenses
);


// ==========================================
// 6. Display results in the console
// ==========================================

console.log("===== Your SpendWise Results =====");
console.log("Your Budget: KSh " + userBudget);
console.log("Your Expenses: KSh " + userExpenses);
console.log("Your Remaining Balance: KSh " + userBalance);
console.log(
    "Percentage of Budget Spent: " +
    spendingPercentage.toFixed(2) +
    "%"
);


// ==========================================
// 7. Budget status
// ==========================================

if (userBalance > 0) {
    console.log("Status: You still have money remaining in your budget.");
} else if (userBalance === 0) {
    console.log("Status: You have used your entire budget.");
} else {
    console.log("Status: You have exceeded your budget.");
}
```
// Budget amount
let budget = 10000;

// Array used to store expense records
let expenses = [
    {
        name: "Lunch",
        amount: 500
    },
    {
        name: "Transport",
        amount: 300
    },
    {
        name: "Shopping",
        amount: 1000
    }
];

// Select HTML elements
const budgetDisplay = document.getElementById("budget");
const totalSpentDisplay = document.getElementById("totalSpent");
const remainingDisplay = document.getElementById("remaining");
const expenseTableBody = document.getElementById("expenseTableBody");
const expenseForm = document.getElementById("expenseForm");
const message = document.getElementById("message");

// Function to update the dashboard
function updateDashboard() {

    let totalSpent = 0;

    // Loop through the expenses array
    for (let i = 0; i < expenses.length; i++) {
        totalSpent += expenses[i].amount;
    }

    let remaining = budget - totalSpent;

    // Update the webpage using the DOM
    budgetDisplay.textContent = `KSh ${budget.toLocaleString()}`;
    totalSpentDisplay.textContent = `KSh ${totalSpent.toLocaleString()}`;
    remainingDisplay.textContent = `KSh ${remaining.toLocaleString()}`;

    // Conditional statements
    if (remaining < 0) {
        message.textContent = "⚠️ You have exceeded your budget.";
    } else if (remaining <= 2000) {
        message.textContent = "⚠️ Your remaining budget is getting low.";
    } else {
        message.textContent = "✅ You are within your budget.";
    }
}

// Function to display expenses
function displayExpenses() {

    // Clear the existing table
    expenseTableBody.innerHTML = "";

    // Loop through every expense
    for (let i = 0; i < expenses.length; i++) {

        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = expenses[i].name;

        const amountCell = document.createElement("td");
        amountCell.textContent =
            `KSh ${expenses[i].amount.toLocaleString()}`;

        row.appendChild(nameCell);
        row.appendChild(amountCell);

        expenseTableBody.appendChild(row);
    }
}

// Handle form submission
expenseForm.addEventListener("submit", function(event) {

    // Prevent page refresh
    event.preventDefault();

    // Get values entered by the user
    const expenseName =
        document.getElementById("expenseName").value.trim();

    const expenseAmount =
        Number(document.getElementById("expenseAmount").value);

    // Conditional validation
    if (expenseName === "" || expenseAmount <= 0) {
        message.textContent = "Please enter a valid expense.";
        return;
    }

    // Add new expense to the array
    expenses.push({
        name: expenseName,
        amount: expenseAmount
    });

    // Update the page
    displayExpenses();
    updateDashboard();

    // Clear the form
    expenseForm.reset();

    message.textContent = "✅ Expense added successfully.";
});

// Display initial data
displayExpenses();
updateDashboard();