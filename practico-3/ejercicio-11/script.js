document.querySelector("#btnBoton").addEventListener("click", mostrarMultiplos);

function mostrarMultiplos(){
    let numero1 = Number(document.querySelector("#txtNumero1").value);
    let numero2 = Number(document.querySelector("#txtNumero2").value);
    let numero3 = Number(document.querySelector("#txtNumero3").value);
    let parrafo = "";

    for(let i = numero1; i <= numero2; i++){
        if(i % numero3){
            parrafo += `${i}<br>`
        }
    }
    document.querySelector("#pParrafo").innerHTML = parrafo;
}