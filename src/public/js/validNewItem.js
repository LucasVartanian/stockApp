const prodCode = document.querySelector("input[name='codeProducto']");
const prodDesc = document.querySelector("input[name='descProducto']");
const prodCant = document.querySelector("input[name='cantProducto']");
const addProduct = document.querySelector("input[type='submit']");

console.log(prodCode, prodDesc, prodCant, addProduct);

function validCode (){
    if (prodCode.value == ""){
        prodCode.setCustomValidity('El código del producto no puede quedar vacío');
    }else{
        prodCode.setCustomValidity('');
    }
}

function validDesc (){
    if (prodDesc.value == ""){
        prodDesc.setCustomValidity('La descripción del producto no puede quedar vacía');
    }else{
        prodDesc.setCustomValidity('');
    }
}

function validCant(){
    if (prodCant.value == ""){
        prodCant.setCustomValidity('Debe ingresar una cantidad');
    }else if (parseInt(prodCant.value) <= 0){
        prodCant.setCustomValidity('El valor debe ser mayor a 0')
    } else{
        prodCant.setCustomValidity('');
    }
}

function validAll(){
    validCant();
    validCode();
    validDesc();
}

addProduct.addEventListener('click', validAll, false)