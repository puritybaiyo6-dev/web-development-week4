
const budget = 50000;

let expenses = [];

const form = document.getElementById("expense-form");
const expenseList = document.getElementById("expense-list");

function updateDashboard() {
    const total = expenses.reduce(
        (sum, expense) => sum + expense.amount, 0
    );

    document.getElementById("total-expenses").textContent =
        "KSh " + total.toLocaleString();

    document.getElementById("balance").textContent =
        "KSh " + (budget - total).toLocaleString();

    document.getElementById("budget").textContent =
        "KSh " + budget.toLocaleString();
}

function displayExpenses() {
    expenseList.innerHTML = "";

    if (expenses.length === 0) {
        expenseList.innerHTML =
            '<tr><td colspan="4">No expenses recorded yet.</td></tr>';
        return;
    }

    expenses.forEach((expense, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${escapeHTML(expense.name)}</td>
            <td>${escapeHTML(expense.category)}</td>
            <td>KSh ${expense.amount.toLocaleString()}</td>
            <td>
                <button class="delete-btn" data-index="${index}">
                    Delete
                </button>
            </td>
        `;

        expenseList.appendChild(row);
    });
}

function escapeHTML(value) {
    return value.replace(/[&<>"']/g, character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[character]);
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("expense-name").value.trim();
    const amount = Number(
        document.getElementById("expense-amount").value
    );
    const category = document.getElementById("expense-category").value;

    if (!name || !category || !Number.isFinite(amount) || amount <= 0) {
        alert("Please enter valid expense details.");
        return;
    }

    expenses.push({
        name: name,
        amount: amount,
        category: category
    });

    displayExpenses();
    updateDashboard();

    form.reset();

    alert("Expense added successfully!");
});

expenseList.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-btn")) {
        const index = Number(event.target.dataset.index);

        expenses.splice(index, 1);

        displayExpenses();
        updateDashboard();
    }
});

updateDashboard();
displayExpenses();
