document.querySelector("#btnBoton").addEventListener("click", convertirAMayusculas);

function convertirAMayusculas(){
    const cadena1 = document.querySelector("#txtCadena1").value;
    const cadena2 = document.querySelector("#txtCadena2").value;
    let mensaje = "";

    if(cadena1.toUpperCase().indexOf(cadena2.toUpperCase()) != -1){
        mensaje = `<b>${cadena2}</b> se encuentra contenido en <b>${cadena1}</b>.`
    } else {
        mensaje = `<b>${cadena2}</b> no se encuentra contenido en <b>${cadena1}</b>.`
    }
    
    document.querySelector("#pParrafo").innerHTML = mensaje;
}