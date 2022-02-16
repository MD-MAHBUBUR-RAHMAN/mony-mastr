//Common Input Function:
function commonInput(inputId) {
    const inputItem = document.getElementById(inputId);
    const inputValue = inputItem.value;
    inputItem.value = inputValue;
    const finalValue = inputItem.value;
    //return function
    return finalValue;
}

//Main Calculation Part:
document.getElementById("calculate").addEventListener("click", function () {
    //Income input========================
    const income = commonInput("income");
    //Food Input:=======================
    const foodExpense = commonInput("food");
    //Rent Input:==========================
    const rentExpense = commonInput("rent");
    //Clothes Inpute:======================
    const clothExpense = commonInput("cloth");
    //Total Expenses:========================
    const totalInnerText = document.getElementById("total-expense");
    totalInnerText.innerText = parseInt(foodExpense) + parseInt(rentExpense) + parseInt(clothExpense);
    const totalExpenses = parseInt(totalInnerText.innerText);
    //Balance Amount:========================================
    const balanceInnerText = document.getElementById("balance");
    balanceInnerText.innerText = parseInt(income) - totalExpenses
    const balanceTotal = parseInt(balanceInnerText.innerText);
    // console.log(typeof balanceTotal, "balance")
})