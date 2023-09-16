document.querySelector("#btnBoton").addEventListener("click", multiplicar);

function multiplicar(){
    let numero1 = Number(document.querySelector("#txtNumero1").value);
    let numero2 = Number(document.querySelector("#txtNumero2").value);
    let producto = 0;

    for(let i = 0; i < numero2; i++){
        producto += numero1
    }
    document.querySelector("#pParrafo").innerHTML = producto;
}