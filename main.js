const element = document.querySelector("#btnAddExpense");
const headingEl = document.querySelector("#headingTotal");
const inputElement = document.querySelector("#inputAmount");
const inputDescEl = document.querySelector("#inputDesc");
const expenseTableEl = document.querySelector("#expenseTable");


let totalExpense=0;
headingEl.textContent=totalExpense;

const allExpenses = [];

function addExpenseToTotal()
{
        
    const textAmount=inputElement.value;
    const textDesc = inputDescEl.value;
 
    const expense = parseInt(textAmount,10);

    totalExpense+=expense;  

    const expenseItem = {};

    expenseItem.desc = textDesc;
    expenseItem.amount = expense;

    allExpenses.push(expenseItem);

    const someText = `Total : ${totalExpense}` 
    headingEl.textContent=someText;

    // const data1 = allExpenses[0];
    // const data2 = allExpenses[1];

    // const data1Text = `Expense : ${data1.amount} :: Desc : ${data1.desc}`;
    // const data2Text = `Expense : ${data2.amount} :: Desc : ${data2.desc}`;

    // const tableText = `
    // <div>${data1Text}</div>
    // <div>${data2Text}</div>
    // `
    // 

    const allExpensesHTML = allExpenses.map(expense=>{
        return `<div>${expense.amount} :: ${expense.desc}</div>`
    });

    const joinedAllExpenses= allExpensesHTML.join("");
    console.log(joinedAllExpenses);
    expenseTableEl.innerHTML = joinedAllExpenses;
}



element.addEventListener("click", addExpenseToTotal,false);

