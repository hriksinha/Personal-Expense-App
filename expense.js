let totalExpense = 0;

function addExpenseTotal() {
    const inputElement = document.querySelector("#inputAmount");
    const textAmount = inputElement.value;
    console.log(textAmount);
}

const element = document.querySelector("#btnAddExpense");
element.addEventListener("click", addExpenseTotal);
