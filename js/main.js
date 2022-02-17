///////////////////////////=======Common Input Function Creation==========\\\\\\\\\\\\\\\\\\\\
function commonInput(inputId) {
    const inputItem = document.getElementById(inputId);
    if (inputItem.value < 0 || inputItem.value == "" || isNaN(inputItem.value)) {
        document.getElementById("correction").style.display = "block";
    }
    else {
        const inputValue = inputItem.value;
        inputItem.value = inputValue;
        const finalValue = parseFloat(inputItem.value);
        //return function
        return finalValue;
    }
}
///////////////////////////=======Expense Calculation==========\\\\\\\\\\\\\\\\\\\\
function calculationExpense() {
    //Food Input:=======================
    const foodExpense = commonInput("food");
    //Rent Input:==========================
    const rentExpense = commonInput("rent");
    //Clothes Inpute:======================
    const clothExpense = commonInput("cloth");

    if (typeof foodExpense === 'undefined' || typeof rentExpense === 'undefined' || typeof clothExpense === 'undefined') {
        document.getElementById("total-expense").innerText = "0"
    } else {
        const TotalExpence = foodExpense + rentExpense + clothExpense;
        return TotalExpence;
    }
}
///////////////////////////=======Balance Calculation==========\\\\\\\\\\\\\\\\\\\\
function calculateBalance() {
    //Income input========================
    const income = commonInput("income");
    const balance = income - calculationExpense();
    return balance;

}
///////////////////////////=======Main Calculation==========\\\\\\\\\\\\\\\\\\\\

document.getElementById("calculate").addEventListener("click", function () {

    //Total Expenses:========================
    const totalInnerText = document.getElementById("total-expense");
    totalInnerText.innerText = calculationExpense()
    const totalExpenses = parseFloat(totalInnerText.innerText);

    const income = commonInput("income");
    if (totalExpenses > income) {
        document.getElementById("balance").innerText = "0"
        document.getElementById("total-expense").innerText = "Not Enough money"
    } else {
        const balanceInnerText = document.getElementById("balance");
        balanceInnerText.innerText = calculateBalance();
    }
})

///////////////////////////=======Savings Calculation==========\\\\\\\\\\\\\\\\\\\\

document.getElementById("save").addEventListener("click", function () {
    const income = commonInput("income");
    const balance = calculateBalance();

    const savePercentage = document.getElementById("save-percent").value;
    const savingAmount = parseFloat(((income / 100) * savePercentage).toFixed(2));

    if (savingAmount > balance || savingAmount < 0) {
        alert('Your Balance is too low for Savings and put only positive value')
    } else {
        const saveMoney = document.getElementById("save-Amount");
        saveMoney.innerText = savingAmount;
        const saveTotal = saveMoney.innerText;
        //remaining Amount
        // const balance = calculateBalance();
        const remaining = document.getElementById("remaing-balance");
        remaining.innerText = parseFloat((balance - parseFloat(saveTotal)).toFixed(2));
    }
})