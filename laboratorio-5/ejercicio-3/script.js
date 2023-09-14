document.querySelector("#btnBoton").addEventListener("click", pasarMayuscula);

function pasarMayuscula(){
    const palabra = document.querySelector("#txtPalabra").value.toLowerCase();
    let palabraAuxiliar = "";

    for(let i = 0; i < palabra.length; i++){
        palabraAuxiliar = palabra.charAt(i) + palabraAuxiliar
    }

    document.querySelector('#pMostrar').innerHTML = palabraAuxiliar;
}