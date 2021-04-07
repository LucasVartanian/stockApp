const date = document.querySelector("input[name='date']")
const prodCode = document.querySelector("select[name='prodCode']")
const prodPrice = document.querySelector("input[name='prodPrice']")
const quant = document.querySelector("input[name='quant']")
const lista = document.querySelector('.lista')
var sales = []


function resetValues() {
    prodPrice.value = "0"
    quant.value = "0"
}

function validAll() {
    if (prodCode.value == "") {
        prodCode.setCustomValidity('El producto no puede no existir')
        return false
    } else {
        prodCode.setCustomValidity('')
    }

    if (prodPrice.value == '' || prodPrice.value <= 0) {
        prodPrice.setCustomValidity('El precio debe ser mayor a cero')
        return false
    } else {
        prodPrice.setCustomValidity('')
    }

    return true
}

function addSale() {
    if (validAll()) {
        const venta = {
            date: date.value,
            prodCode: prodCode.value,
            prodPrice: prodPrice.value,
            quant: quant.value
        }
        const arrayVenta = Object.values(venta).join(', ');

        sales.push(venta);
        console.log(sales);
        lista.innerHTML += arrayVenta + "<br>"

        resetValues();
    }   
}