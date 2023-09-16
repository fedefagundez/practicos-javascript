document.querySelector("#btnBoton").addEventListener("click", comienzanConLaMismaLetra);

function comienzanConLaMismaLetra(){
    const cadena = document.querySelector("#txtCadena").value.toUpperCase();
    let mensaje = "";

    if(cadena.charAt(0) === cadena.charAt(cadena.length)){
        mensaje = "La cadena comienza y termina con la misma letra."
    } else {
        mensaje = "La cadena no comienza y termina con la misma letra."
    }

    document.querySelector("#pParrafo").innerHTML = mensaje;
}