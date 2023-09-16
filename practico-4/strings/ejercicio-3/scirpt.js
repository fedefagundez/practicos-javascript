document.querySelector("#btnBoton").addEventListener("click", convertirAMayusculas);

function convertirAMayusculas(){
    const cadena = document.querySelector("#txtCadena").value.toUpperCase();
    
    document.querySelector("#pParrafo").innerHTML = cadena;
}