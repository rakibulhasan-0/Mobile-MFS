const validPin = 1234
const transactionData = [];


// function to get input values

function getInputvalueNumber(id) {

    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    const inputFieldValueNumber = parseInt(inputFieldValue)

    return inputFieldValueNumber

}

function getInputvalueValue(id) {

    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value


    return inputFieldValue;

}

function getinnerText(id) {
    const inner = document.getElementById(id)
    const text = inner.innerText
    const finalInner = parseInt(text)

    return finalInner
}

function setInnerText(value) {
    const availableBalanceElement = document.getElementById('available-balance')

    availableBalanceElement.innerText = value
}

function togglehandle(id) {
    const forms = document.getElementsByClassName('form')


    for (const from of forms) {
        from.style.display = 'none'
    }
    document.getElementById(id).style.display = 'block'
}

function togglehandleButton(id) {
    const fromButtons = document.getElementsByClassName("form-btn")

    for (const fromButton of fromButtons) {
        fromButton.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]')
        fromButton.classList.add('border-gray-300')
    }

    document.getElementById(id).classList.remove('border-gray-300')
    document.getElementById(id).classList.add('border-[#0874f2]', 'bg-[#0874f20d]')

}


document.getElementById('add-money-btn').addEventListener("click", function (e) {
    e.preventDefault()
    const bank = getInputvalueValue('bank');

    const accountNumber = getInputvalueValue('account-number')

    // const amount = parseInt(document.getElementById('add-amount').value)
    const amount = getInputvalueNumber('add-amount')
    if (amount <= 0) {
        alert('invalid amount')
        return
    }

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
    setInnerText(totalNewAvailableBalance);

    const data = {
        name: "Add money",
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data)
    console.log(transactionData)

})

// cashout section

document.getElementById('withdraw-btn').addEventListener('click', function (e) {
    e.preventDefault()
    console.log('withdraw button clicked')

    const agentNumber = getInputvalueValue('agent-number');

    const withdrawAmount = getInputvalueNumber("add-amount-w")

    const pin = getInputvalueNumber("add-pin-w")

    const availableBalance = getinnerText('available-balance')

    if (withdrawAmount <= 0 || withdrawAmount > availableBalance) {
        alert('Invalid Amount')
        return
    }


    if (agentNumber.length < 11) {
        alert('please porvide valid Account  number')
        return;
    }

    if (pin !== validPin) {
        alert('please provide valid pin number')
        return;
    }

    const afterWithdraw = availableBalance - withdrawAmount

    setInnerText(afterWithdraw)
    const data = {
        name: "Cashout",
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data)
    console.log(transactionData)
})

// transection 

document.getElementById('transaction-main').addEventListener('click', function () {
    const transactionContainer = document.getElementById('transaction-container')
    transactionContainer.innerText = ''

    for (const data of transactionData) {
        const div = document.createElement("div")
        div.innerHTML = `<div class="bg-white rounded-xl p-3 flex justify-between items-center mt-3">
                        <div class="flex items-center">
                            <div class=" p-3 rounded-full bg-[#f4f5f7]">
                                <img src="./assets/wallet1.png" class="mx-auto" alt="">
                            </div>
                            <div class="ml-3">
                                <h1>${data.name}</h1>
                                <p>${data.date}</p>
                            </div>
                        </div>
                        <div>
                            <i class="fa-solid fa-ellipsis-vertical"></i>
                        </div>
                    </div>

                `
        transactionContainer.appendChild(div)
    }
})


// just reversed check


//     for (const data of transactionData.slice().reverse()) {
//         const div = document.createElement("div")
//         div.innerHTML = `
//         <div class="bg-white rounded-xl p-3 flex justify-between items-center mt-3">
//             <div class="flex items-center">
//                 <div class=" p-3 rounded-full bg-[#f4f5f7]">
//                     <img src="./assets/wallet1.png" class="mx-auto" alt="">
//                 </div>
//                 <div class="ml-3">
//                     <h1>${data.name}</h1>
//                     <p>${data.date}</p>
//                 </div>
//             </div>
//             <div>
//                 <i class="fa-solid fa-ellipsis-vertical"></i>
//             </div>
//         </div>
//     `
//     transactionContainer.appendChild(div)
//     } 
// })



// btn handle

document.getElementById('add-money-main').addEventListener('click', function () {

    togglehandle('add-money-parent')
    togglehandleButton('add-money-main')


})
document.getElementById('cashout-main').addEventListener('click', function () {
    togglehandle('cashout-parent')
    togglehandleButton('cashout-main')

})

document.getElementById('transfer-main').addEventListener('click', function () {
    togglehandle('transfer-parent')
    togglehandleButton('transfer-main')


})
document.getElementById('get-bonus-main').addEventListener('click', function () {
    togglehandle('get-bonus-parent')
    togglehandleButton('get-bonus-main')

})
document.getElementById('pay-bill-main').addEventListener('click', function () {
    togglehandle('pay-bill-parent')
    togglehandleButton('pay-bill-main')

})
document.getElementById('transaction-main').addEventListener('click', function () {
    togglehandle('transaction-parent')
    togglehandleButton('transaction-main')

})