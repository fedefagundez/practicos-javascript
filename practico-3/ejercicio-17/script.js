document.querySelector("#btnBoton").addEventListener("click", dividir);

function dividir(){
    let numero1 = Number(document.querySelector("#txtNumero1").value);
    let numero2 = Number(document.querySelector("#txtNumero2").value);
    let resto = numero1;
    let divisor = numero2;
    let mensaje = "";
    let cociente = 0;

    while(resto >= divisor){
        resto -= divisor
        cociente++
    }

    document.querySelector("#pParrafo").innerHTML = `El resultado de la división es ${cociente} y el resto es ${resto}` 
}