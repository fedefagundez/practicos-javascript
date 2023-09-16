document.querySelector("#btnBoton").addEventListener("click", calcularFactorial);

function calcularFactorial(){
    let numero = Number(document.querySelector("#txtNumero").value);
    let factorial = 1;
    for(let i = 1; i <= numero; i++){
        factorial *= `${i}`;
    }
    document.querySelector("#pParrafo").innerHTML = factorial;
}