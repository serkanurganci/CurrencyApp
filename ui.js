class UI{

    constructor(firstCurrency,secondCurrency){

        this.firstCurrency = firstCurrency
        this.secondCurrency = secondCurrency

        this.outputFirst = document.getElementById("outputFirst")
        this.outputSecond = document.getElementById("outputSecond")
        this.outputResult = document.getElementById("outputResult")

    }

    changeFirst(){
        this.outputFirst.textContent = this.firstCurrency.options[this.firstCurrency.selectedIndex].textContent
    }

    changeSecond(){
        this.outputSecond.textContent = this.secondCurrency.options[this.secondCurrency.selectedIndex].textContent
    }

    displayResult(result){
        this.outputResult.value = result
    }
}