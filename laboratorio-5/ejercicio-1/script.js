document.querySelector("#btnBoton").addEventListener("click", pasarMayuscula);

function pasarMayuscula(){
    let palabra = document.querySelector("#txtPalabra").value.toUpperCase();

    document.querySelector("#pMostrar").innerHTML = palabra;
}