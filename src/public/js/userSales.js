const date = document.querySelector("input[name='date']")
const prodCode = document.querySelector("select[name='prodCode']")
const prodPrice = document.querySelector("input[name='prodPrice']")
const quant = document.querySelector("input[name='quant']")
const lista = document.querySelector('.lista')
const bodyTabla = document.querySelector('.bodyTabla')
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
        console.log(sales);

        bodyTabla.innerHTML +=
        "<tr>" +
        "<td class='align-middle'>" + venta.date + "</td>" +
        "<td class='align-middle'>" + venta.prodCode + "</td>" +
        "<td class='align-middle'>" + venta.quant + "</td>" +
        "<td class='align-middle'>" + venta.prodPrice + "</td" +
        "</tr>"
        resetValues();
    }
};

/* <table class="table table-striped">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Código</th>
                    <th scope="col">Descripcion</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody class="border-right border-left border-bottom">
                <% for( let i = 0; i < data.length; i++ ) { %>
                <tr>
                    <td class="align-middle" scope="row"><%= data[i].id %></td>
                    <td class="align-middle"><%= data[i].code %></td>
                    <td class="align-middle"><%= data[i].descr %></td>
                    <td class="align-middle"><%= data[i].quant %></td>
                    <td class="align-middle">
                        <a href="/edit/<%= data[i].id %>"><button class="btn btn-primary">EDITAR</button></a>
                        <a href="/delete/<%= data[i].id %>"><button class="btn btn-danger"">ELIMINAR</button></a>
                    </td>
                </tr>
                <% } %>

            </tbody>
        </table> */