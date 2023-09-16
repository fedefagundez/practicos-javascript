document.querySelector("#btnBoton").addEventListener("click", contarDigitos);

function contarDigitos(){
    let num = Number(document.querySelector("#txtNumero").value);
    let aux = num;
    let cantidadDigitos = 0;
    
    while(aux >= 1){
        aux /= 10;
        cantidadDigitos++;
    }
    document.querySelector("#pParrafo").innerHTML = `El número ${num} tiene ${cantidadDigitos} dígitos.`;
}