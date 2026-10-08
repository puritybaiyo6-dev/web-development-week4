# SpendWise — JavaScript Foundation

## Project Overview

SpendWise is a personal budgeting dashboard that helps users understand their budget, expenses, and remaining balance.

In this week's project, JavaScript was added to the existing SpendWise dashboard to make the application capable of processing budgeting information.

## JavaScript Concepts Implemented

The project demonstrates the following JavaScript concepts:

* Variables
* Data types
* User input
* Number conversion
* Arithmetic calculations
* Functions
* Conditional statements
* Console output

## Variables

Variables are used to store important budgeting information.

For example:

```javascript
let monthlyBudget = 80000;
let totalExpenses = 46500;
let remainingBalance = monthlyBudget - totalExpenses;
```

The variables store the monthly budget, total expenses, and remaining balance.

## Collecting User Input

The application uses the JavaScript `prompt()` function to collect budgeting information from the user.

```javascript
let userBudget = prompt("Enter your monthly budget in KSh:");
let userExpenses = prompt("Enter your total expenses in KSh:");
```

The values are then converted into numbers using `Number()` so they can be used in calculations.

## Budget Calculations

SpendWise calculates the remaining balance by subtracting expenses from the budget.

```javascript
let userBalance = calculateBalance(userBudget, userExpenses);
```

The application also calculates the percentage of the budget that has been spent.

## Functions

Functions are used to organize reusable application logic.

The `calculateBalance()` function calculates the remaining amount:

```javascript
function calculateBalance(budget, expenses) {
    return budget - expenses;
}
```

The `calculateSpendingPercentage()` function calculates the percentage of the budget that has been spent:

```javascript
function calculateSpendingPercentage(budget, expenses) {
    return (expenses / budget) * 100;
}
```

Using functions makes the code easier to organize, reuse, and maintain.

## Displaying Results

The calculated results are displayed in the browser's Developer Console using `console.log()`.

The console displays:

* Monthly budget
* Total expenses
* Remaining balance
* Percentage of budget spent
* Budget status

## How to Test

1. Open `index.html` in a web browser.
2. JavaScript prompts will ask for the monthly budget and total expenses.
3. Enter the requested values.
4. Open Developer Tools using `F12` or right-click and select **Inspect**.
5. Open the **Console** tab.
6. Check the SpendWise calculation results.

## Project Files

### `index.html`

Contains the structure of the SpendWise dashboard.

### `style.css`

Contains the styling and responsive layout of the dashboard.

### `script.js`

Contains the JavaScript variables, user input, calculations, functions, and console output.

### `README.md`

Explains the project and the JavaScript concepts implemented.

## Technologies Used

* HTML5
* CSS3
* JavaScript
* CSS Grid
* Flexbox

## Conclusion

The SpendWise project has been extended from a static dashboard into an application that can collect budgeting information, perform calculations, and display financial results using JavaScript.

# SpendWise - Interactive Budget Tracker

## Project Description

SpendWise is a budget tracking application that helps users record expenses, calculate their total spending, and monitor their remaining budget.

This week, the project was improved by adding JavaScript functionality to make the application interactive and dynamic.

## Improvements Made This Week

The following features were added:

* Users can add new expenses.
* Expenses are stored in a JavaScript array.
* A loop processes the expense records.
* The total amount spent is calculated automatically.
* The remaining budget is updated dynamically.
* Conditional statements provide feedback about the user's budget.
* The webpage is updated using DOM manipulation.
* Event listeners respond to form submissions.
* Expense records are displayed directly in the webpage.

## Conditional Statements

Conditional statements are used to evaluate the user's remaining budget.

For example:

```javascript
if (remaining < 0) {
    message.textContent = "You have exceeded your budget.";
} else if (remaining <= 2000) {
    message.textContent = "Your remaining budget is getting low.";
} else {
    message.textContent = "You are within your budget.";
}
```

These conditions allow SpendWise to give different feedback depending on the user's spending.

## Arrays

An array is used to store multiple expense records:

```javascript
let expenses = [
    {
        name: "Lunch",
        amount: 500
    },
    {
        name: "Transport",
        amount: 300
    }
];
```

When a user adds an expense, the `push()` method adds the new record to the array.

## Loops

A `for` loop is used to process all expense records and calculate the total amount spent.

```javascript
for (let i = 0; i < expenses.length; i++) {
    totalSpent += expenses[i].amount;
}
```

The loop makes it possible to process multiple expenses efficiently.

## DOM Manipulation

DOM manipulation is used to update the webpage without requiring the user to refresh it.

For example:

```javascript
totalSpentDisplay.textContent = `KSh ${totalSpent}`;
```

The expense table is also created dynamically using JavaScript.

## Event Handling

An event listener is used to detect when the user submits the expense form:

```javascript
expenseForm.addEventListener("submit", function(event) {
    event.preventDefault();
});
```

This allows the application to respond to user actions and add new expenses.

## Application Flow

The application follows this process:

1. The user enters an expense name and amount.
2. The user submits the form.
3. JavaScript receives the form data.
4. The new expense is added to the expenses array.
5. The expense records are processed using a loop.
6. The total spent and remaining budget are calculated.
7. The dashboard is updated through DOM manipulation.
8. The user receives feedback based on their remaining budget.

## Challenges Encountered

One challenge was connecting the JavaScript data to the HTML page. This was resolved by using DOM methods such as `getElementById()`, `textContent`, and `createElement()`.

Another challenge was ensuring that the page did not refresh when the form was submitted. This was solved by using `event.preventDefault()`.

## Conclusion

The SpendWise project now demonstrates the core JavaScript concepts learned this week, including variables, arrays, loops, conditional statements, DOM manipulation, and event listeners. These features make the budgeting application interactive and responsive to user actions.
