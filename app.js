//Selecting Elements
const amountElement = document.querySelector("#amount")
const firstCurrency = document.querySelector("#firstCurrency")
const secondCurrency = document.querySelector("#secondCurrency")
const currency = new Currency("USD","TRY")
const ui = new UI(firstCurrency,secondCurrency)
eventListener()

function eventListener(){

    amountElement.addEventListener("input",exchangeCurrency)

    firstCurrency.onchange = function(){
        currency.changeFirstCurrency(firstCurrency.options[firstCurrency.selectedIndex].textContent)
        ui.changeFirst()
    }
    secondCurrency.onchange = function(){
        currency.changeSecondCurrency(secondCurrency.options[secondCurrency.selectedIndex].textContent)
        ui.changeSecond()
    }

}

function exchangeCurrency(){

    currency.changeAmount(amountElement.value)
    currency.exchange()
    .then((result) => {
        ui.displayResult(result)
    }).catch((err) => {
        console.log(err)
    });

}