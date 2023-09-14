document.querySelector("#btnBoton").addEventListener("click", paraCeliacos);

function paraCeliacos(){
    const nombreReceta = document.querySelector("#txtNombreDeLaReceta").value;
    const ingredientes = document.querySelector("#txtIngredientes").value.toUpperCase();
    let esParaCeliacos = true;
    let mensaje = '';

    if(
        ingredientes.indexOf("TRIGO") >= 0 ||
        ingredientes.indexOf("CENTENO") >= 0 ||
        ingredientes.indexOf("CEVADA") >= 0 ||
        ingredientes.indexOf("AVENA") >= 0
    ){
        esParaCeliacos = false;
    }

   
    if(esParaCeliacos){
        mensaje = `La receta ${nombreReceta} es apta para celiacos.`
    } else {
        mensaje = `La receta ${nombreReceta} no es apta celiacos.`
    }

    document.querySelector("#pMostrar").innerHTML = mensaje;
}
