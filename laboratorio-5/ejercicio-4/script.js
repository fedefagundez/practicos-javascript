document.querySelector("#btnBoton").addEventListener("click", quitarLetra);

function quitarLetra(){
    const palabra = document.querySelector("#txtPalabra").value;
    const letra = document.querySelector('#txtLetra').value;
    let palabraAuxiliar = "";

    for(let i = 0; i < palabra.length; i++){
        if(palabra.charAt(i).toUpperCase() !== letra.toUpperCase()){
            palabraAuxiliar += palabra.charAt(i);
        }
    }

    document.querySelector('#pMostrar').innerHTML = palabraAuxiliar;
}