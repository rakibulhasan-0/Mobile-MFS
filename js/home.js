const validPin = 1234


// function to get input values

function getInputvalueNumber (id){

   const inputField= document.getElementById(id)
   const inputFieldValue = inputField.value
   const inputFieldValueNumber = parseInt(inputFieldValue)

   return inputFieldValueNumber

}

function getInputvalueValue (id){

   const inputField= document.getElementById(id)
   const inputFieldValue = inputField.value
   

   return inputFieldValue;

}

function getinnerText (id){
    const inner = document.getElementById(id)
    const text = inner.innerText
    const finalInner = parseInt(text)

    return finalInner
}

function setInnerText(value){
    const availableBalanceElement = document.getElementById('available-balance')

    availableBalanceElement.innerText = value
}



document.getElementById('add-money-btn').addEventListener("click", function (e) {
    e.preventDefault()
    console.log("Add Money button clicked")

    // const bank = document.getElementById('bank').value

    const bank = getInputvalueValue('bank');
    // const accountNumber = document.getElementById('account-number').value


    const accountNumber = getInputvalueValue('account-number')

    // const amount = parseInt(document.getElementById('add-amount').value)
    const amount = getInputvalueNumber('add-amount')
    // const pin = parseInt(document.getElementById('add-pin').value)

    const pin = getInputvalueNumber('add-pin')


    // const availableBalance = parseInt(document.getElementById('available-balance').innerText)

    const availableBalance = getinnerText('available-balance')


    const totalNewAvailableBalance = amount + availableBalance

    if (accountNumber.length < 11) {
        alert('please porvide valid Account  number')
        return;
    }

    if (pin !== validPin) {
        alert('please provide valid pin number')
        return;
    }

    // document.getElementById('available-balance').innerText = totalNewAvailableBalance
    setInnerText (totalNewAvailableBalance);

    console.log(availableBalance)

})

document.getElementById('add-money-main').addEventListener('click', function () { 

    document.getElementById('cashout-parent').style.display = 'none'

    document.getElementById('add-money-parent').style.display = 'block'

})
document.getElementById('cashout-main').addEventListener('click', function () { 

    document.getElementById('cashout-parent').style.display = 'block'

    document.getElementById('add-money-parent').style.display = 'none'

})

// cashout section

document.getElementById('withdraw-btn').addEventListener('click', function(e){
    e.preventDefault()
    console.log('withdraw button clicked')

    // const agentNumber = document.getElementById('agent-number').value

    const agentNumber = getInputvalueValue('agent-number');

    // const withdrawAmount = parseInt(document.getElementById('add-amount-w').value)

    const withdrawAmount = getInputvalueNumber("add-amount-w")

    // const pin = parseInt(document.getElementById('add-pin-w').value)

    const pin = getInputvalueNumber("add-pin-w")

    // const availableBalance = parseInt(document.getElementById('available-balance').innerText)

    const availableBalance =  getinnerText('available-balance')


    if (agentNumber.length < 11) {
        alert('please porvide valid Account  number')
        return;
    }

    if (pin !== validPin) {
        alert('please provide valid pin number')
        return;
    }

    const afterWithdraw = availableBalance - withdrawAmount

    // document.getElementById('available-balance').innerText = afterWithdraw;
    setInnerText(afterWithdraw)

    console.log(afterWithdraw);

    
})