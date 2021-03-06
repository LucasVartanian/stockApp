const date = document.querySelector("input[name='date']")
const prodCode = document.querySelector("select[name='prodCode']")
const prodPrice = document.querySelector("input[name='prodPrice']")
const quant = document.querySelector("input[name='quant']")
const lista = document.querySelector('.lista')
const bodyTabla = document.querySelector('.bodyTabla')
const form = document.querySelector('#formAddVenta')
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

    if(quant.value == 0){
        quant.setCustomValidity('La cantidad no puede ser 0')
        return false
    } else{
        quant.setCustomValidity('')
    }

    return true
};

function addSale() {
    if (validAll()) {
        const venta = {
            date: date.value.split("-").reverse().join("-"),
            prodCode: prodCode.value,
            prodPrice: prodPrice.value,
            quant: quant.value
        }
        const arrayVenta = Object.values(venta).join(', ');
        sales.push(venta);

        bodyTabla.innerHTML +=
        "<tr>" +
        "<td class='align-middle'>" + venta.date + "</td>" +
        "<td class='align-middle'>" + venta.prodCode + "</td>" +
        "<td class='align-middle'>" + venta.quant + "</td>" +
        "<td class='align-middle'>" + venta.prodPrice + "</td" +
        "</tr>"
        resetValues();

        var ventasArr = JSON.stringify(sales)
        form.action = "/ventas/" + ventasArr

        console.log(formAction);
    }
};
