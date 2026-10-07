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
