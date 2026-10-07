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
