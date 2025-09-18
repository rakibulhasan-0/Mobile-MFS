const validPin = 1234

document.getElementById('add-money-btn').addEventListener("click", function (e) {
    e.preventDefault()
    console.log("Add Money button clicked")

    const bank = document.getElementById('bank').value
    const accountNumber = document.getElementById('account-number').value
    const amount = parseInt(document.getElementById('add-amount').value)
    const pin = parseInt(document.getElementById('add-pin').value)


    const availableBalance = parseInt(document.getElementById('available-balance').innerText)


    const totalNewAvailableBalance = amount + availableBalance

    if (accountNumber.length < 11) {
        alert('please porvide valid Account  number')
        return;
    }

    if (pin !== validPin) {
        alert('please provide valid pin number')
        return;
    }

    document.getElementById('available-balance').innerText = totalNewAvailableBalance

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

    const agentNumber = document.getElementById('agent-number').value

    const withdrawAmount = parseInt(document.getElementById('add-amount-w').value)

    const pin = parseInt(document.getElementById('add-pin-w').value)

    const availableBalance = parseInt(document.getElementById('available-balance').innerText)


    if (agentNumber.length < 11) {
        alert('please porvide valid Account  number')
        return;
    }

    if (pin !== validPin) {
        alert('please provide valid pin number')
        return;
    }

    const afterWithdraw = availableBalance - withdrawAmount

    document.getElementById('available-balance').innerText = afterWithdraw;

    console.log(afterWithdraw);

    



})