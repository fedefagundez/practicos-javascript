document.querySelector("#btnBoton").addEventListener("click", dividirEntreVeinte);

function dividirEntreVeinte(){
    let num = Number(document.querySelector("#txtNumero").value);
    let aux = num;
    let mensaje = "";

    if(num <= 2000){
        mensaje = "El número ingresado debe ser mayor a 2000, ingreselo nuevamente."
    } else {

        while(aux >= 100){
            aux /= 20;
            mensaje = `Resultado: ${aux}`;
        }

    }
    
    
    document.querySelector("#pParrafo").innerHTML = mensaje;
}