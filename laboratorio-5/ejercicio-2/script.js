document.querySelector("#btnBoton").addEventListener("click", pasarMayuscula);

function pasarMayuscula(){
    let palabra = document.querySelector("#txtPalabra").value.toLowerCase();

    document.querySelector("#pMostrar").innerHTML = palabra;
}