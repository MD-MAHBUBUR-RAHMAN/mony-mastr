//Common Input Function:
function commonInput(inputId) {
    const inputItem = document.getElementById(inputId);
    if (inputItem.value < 0 || inputItem.value == "" || isNaN(inputItem.value)) {
        document.getElementById("correction").style.display = "block";
    }
    else {
        const inputValue = inputItem.value;
        inputItem.value = inputValue;
        const finalValue = parseInt(inputItem.value);
        //return function
        return finalValue;
    }

}
function calculationExpense() {
    //Food Input:=======================
    const foodExpense = commonInput("food");
    //Rent Input:==========================
    const rentExpense = commonInput("rent");
    //Clothes Inpute:======================
    const clothExpense = commonInput("cloth");

    const TotalExpence = foodExpense + rentExpense + clothExpense;
    return TotalExpence;
}
function calculateBalance() {
    //Income input========================
    const income = commonInput("income");
    const balance = income - calculationExpense();
    return balance;

}

//Main Calculation Part:
document.getElementById("calculate").addEventListener("click", function () {
    // //Income input========================
    // const income = commonInput("income");
    // //Food Input:=======================
    // const foodExpense = commonInput("food");
    // //Rent Input:==========================
    // const rentExpense = commonInput("rent");
    // //Clothes Inpute:======================
    // const clothExpense = commonInput("cloth");
    //Total Expenses:========================
    const totalInnerText = document.getElementById("total-expense");
    totalInnerText.innerText = calculationExpense()
    // totalInnerText.innerText = foodExpense + rentExpense + clothExpense;
    const totalExpenses = parseInt(totalInnerText.innerText);
    //Balance Amount:========================================
    const balanceInnerText = document.getElementById("balance");
    balanceInnerText.innerText = calculateBalance();
    // balanceInnerText.innerText = income - totalExpenses
    const balanceTotal = parseInt(balanceInnerText.innerText);
    //Excess Cost Velidation
    if (balanceTotal < totalExpenses) {
        balanceInnerText.innerText = "Expense Exceded Your Balance"
        totalInnerText.innerText = "Reduce Your Expense,Please!"
    }
})



//saving mony

document.getElementById("save").addEventListener("click", function () {
    const income = commonInput("income");
    const savePercentage = document.getElementById("save-percent").value;
    const savingAmount = (income / 100) * savePercentage;
    // saving Amount
    const saveMoney = document.getElementById("save-Amount");
    saveMoney.innerText = savingAmount;
    const saveTotal = saveMoney.innerText;
    //     //remaining Amount
    const remaining = document.getElementById("remaing-balance");
    remaining.innerText = calculateBalance() - parseInt(saveTotal);
    // console.log(remaining.innerText)

})