const headingEl = document.querySelector("#headingTotal");
let totalExpense = 0;
headingEl.textContent = totalExpense;


function addExpenseTotal() {
    const inputElement = document.querySelector("#inputAmount");
    const textAmount = inputElement.value;
    console.log(textAmount);


    const expense= parseInt(textAmount, 10);
    console.log({ expense });

    totalExpense = totalExpense + expense;
    console.log({ totalExpense });
    headingEl.textContent = totalExpense;
}

const element = document.querySelector("#btnAddExpense");
element.addEventListener("click", addExpenseTotal);
