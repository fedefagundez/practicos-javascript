document.querySelector("#btnBoton").addEventListener("click", paraCeliacos);

function paraCeliacos(){
    const nombreReceta = document.querySelector("#txtNombreDeLaReceta").value;
    const ingredientes = document.querySelector("#txtIngredientes").value.toUpperCase();
    let ingredienteAuxiliar = '';
    let esParaCeliacos = true;
    let i = 0;
    let mensaje = '';

    while(i < ingredientes.length && esParaCeliacos){
        if(ingredientes.charAt(i) !== ','){
            ingredienteAuxiliar += ingredientes.charAt(i);
        }

        if(ingredientes.charAt(i) === ','){
            switch(ingredienteAuxiliar){
                case 'TRIGO' : esParaCeliacos = false;
                break; 
                case 'AVENA' : esParaCeliacos = false;
                break; 
                case 'CENTENO' : esParaCeliacos = false;
                break; 
                case 'CEVADA' : esParaCeliacos = false;
                break; 
            }
            ingredienteAuxiliar = '';
        }
        i++;
    }

    if(esParaCeliacos){
        mensaje = `La receta ${nombreReceta} es apta para celiacos.`
    } else {
        mensaje = `La receta ${nombreReceta} no es apta celiacos.`
    }

    document.querySelector("#pMostrar").innerHTML = mensaje;
}

