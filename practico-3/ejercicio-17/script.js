document.querySelector("#btnBoton").addEventListener("click", primerMultiploDe4Y6);

function primerMultiploDe4Y6(){
    let numero1 = Number(document.querySelector("#txtNumero1").value);
    let numero2 = Number(document.querySelector("#txtNumero2").value);
    let multiploDeCuatroYSeis = 0;
    let esMultiploDeCuatrYSeis = false;
    let mensaje = "";

    if(numero1 > numero2){
        let aux = numero1;
        numero1 = numero2;
        numero2 = aux;
    }

    for(let i = numero1; i <= numero2; i++){
        if(i % 4 === 0 && i % 6 === 0){
            multiploDeCuatroYSeis = i;
            esMultiploDeCuatrYSeis = true;
        }
    }

    if(esMultiploDeCuatrYSeis){
        mensaje = `El primer múltiplo entre 4 y 6 es: ${multiploDeCuatroYSeis}`;
    } else {
        mensaje = `No se encontraron múltiplos entre 4 y 6.`
    }
    document.querySelector("#pParrafo").innerHTML = mensaje;
}