document.getElementById("calculate").addEventListener("click", function () {
    //Income input===================================
    const incomeInput = document.getElementById("income");
    const incomeValue = incomeInput.value;
    incomeInput.value = incomeValue;
    const income = incomeInput.value;
    // console.log(income)

    //Food Input:======================================
    const foodInput = document.getElementById("food");
    const foodExpenseValue = foodInput.value;
    foodInput.value = foodExpenseValue;
    const foodExpense = foodInput.value;
    // console.log(typeof foodExpense)

    //Rent Input:==============================
    const rentInput = document.getElementById("rent");
    const rentExpenseValue = rentInput.value;
    rentInput.value = rentExpenseValue;
    const rentExpense = rentInput.value;
    // console.log(rentExpense)

    //Clothes Inpute:===============================
    const clothInput = document.getElementById("cloth");
    const clothExpenseValue = clothInput.value
    clothInput.value = clothExpenseValue;
    const clothExpense = clothInput.value;
    // console.log(clothExpense)

    //Total Expenses:==========================================
    const totalInnerText = document.getElementById("total-expense");
    totalInnerText.innerText = parseInt(foodExpense) + parseInt(rentExpense) + parseInt(clothExpense);
    const totalExpenses = parseInt(totalInnerText.innerText);


    //Balance Amount:========================================
    const balanceInnerText = document.getElementById("balance");
    balanceInnerText.innerText = parseInt(income) - totalExpenses
    const balanceTotal = parseInt(balanceInnerText.innerText);
    // console.log(typeof balanceTotal, "balance")
})