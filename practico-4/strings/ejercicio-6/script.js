document.querySelector("#btnBoton").addEventListener("click", contarVocalesOConsonantes);

function contarVocalesOConsonantes(){
    const texto = document.querySelector("#txtTexto").value;
    let cantidadDeVocales = 0;
    let cantidadDeConsonantes = 0;
    const VOCALES = "aeiouAEIOU";

    for(let i = 0; i < texto.length; i++){
        if(VOCALES.indexOf(texto.charAt(i)) !== -1){
            cantidadDeVocales++;
        }
    }

    if(texto.length > 10){
        mensaje = `El texto "${texto}" tiene ${cantidadDeVocales} vocales.`
    } else {
        cantidadDeConsonantes = texto.length - cantidadDeVocales;
        mensaje = `El texto "${texto}" tiene ${cantidadDeConsonantes} consonantes.`
    }

    document.querySelector("#pParrafo").innerHTML = mensaje;

    
}