budgetArr=[]

function addBudget(){
    budgetObj={
        budget : inputBudget.value,
        price : inputPrice.value

    }
    if(inputBudget.value && inputPrice.value != ""){
        budgetArr.push(budgetObj)
    }
}