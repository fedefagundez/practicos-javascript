document.querySelector("#btnBoton").addEventListener("click", mostrarNumeros);

function mostrarNumeros(){
    let numero1 = Number(document.querySelector("#txtNumero1").value);
    let numero2 = Number(document.querySelector("#txtNumero2").value);
    let parrafo = '';

    if(numero1 > numero2){
        let aux = numero1;
        numero1 = numero2;
        numero2 = aux;
    }

    for(let i = numero1; i <= numero2; i++){
        parrafo += `${i}<br>`;
    }
    document.querySelector("#pParrafo").innerHTML = parrafo;
}