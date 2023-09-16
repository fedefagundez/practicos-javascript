document.querySelector("#btnBoton").addEventListener("click", contarVocales);

function contarVocales(){
    const cadena = document.querySelector("#txtCadena").value;
    let mensaje = "";
    let vocales = "AEIUO"
    let cantidadDeVocales = 0;

    for(let i = 0; i < cadena.length; i++){
        // Si indexOf es distinto de -1 quiere decir que la letra
        // se encuentra en la cadena vocales
        if(vocales.indexOf(cadena.charAt(i).toUpperCase()) != -1){
            cantidadDeVocales++;
        }
    }

    document.querySelector("#pParrafo").innerHTML = `La palabra <b>${cadena}</b> tiene ${cantidadDeVocales} vocales.`;
}