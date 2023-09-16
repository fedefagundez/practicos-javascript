document.querySelector("#btnBoton").addEventListener("click", mayusculaLaPrimerLetra);

function mayusculaLaPrimerLetra(){
    const texto = document.querySelector("#txtTexto").value;
    let nuevoTexto = texto.charAt(0).toUpperCase() + texto.substring(1).toLowerCase();

    document.querySelector("#pParrafo").innerHTML = nuevoTexto;
};