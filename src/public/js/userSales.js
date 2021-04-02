const date = document.querySelector("input[name='date']")
const prodCode = document.querySelector("input[name='prodCode']")
const prodPrice = document.querySelector("input[name='prodPrice']")
const quant = document.querySelector("input[name='quant']")
var sales = []

function validAll(){
    if (prodCode.value == ""){
        prodCode.setCustomValidity('El producto no puede no existir')
        return false
    } else{
        prodCode.setCustomValidity('')
    }

    if (prodPrice.value=='' || prodPrice.value<=0){
        prodPrice.setCustomValidity('El precio debe ser mayor a cero')
        return false
    } else{
        prodPrice.setCustomValidity('')
    }

    return true
}

function addSale() {
    if (validAll()){
        sales.push({
            date: date.value,
            prodCode: prodCode.value,
            prodPrice: prodPrice.value,
            quant: quant.value
        }
        )
    }
}