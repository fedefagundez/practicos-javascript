document.querySelector("#btnBoton").addEventListener("click", paraCeliacos);

function paraCeliacos(){
    const nombrePelicula = document.querySelector("#txtNombreDeLaPelicula").value;
    const caracteristicas = document.querySelector("#txtCaracteristicas").value.toUpperCase();
    let mensaje = '';

    if(caracteristicas.indexOf("REFERENCIAS O CONTENIDO SEXUAL") >= 0 ||
    ) {

    }

   
    if(esParaCeliacos){
        mensaje = `La receta ${nombreReceta} es apta para celiacos.`
    } else {
        mensaje = `La receta ${nombreReceta} no es apta celiacos.`
    }

    document.querySelector("#pMostrar").innerHTML = mensaje;
}
