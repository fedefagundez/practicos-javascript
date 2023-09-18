document.querySelector("#btnBoton").addEventListener("click", contarMayusculasYMinusculas);

function contarMayusculasYMinusculas(){
    let texto = document.querySelector("#txtTexto").value;
    let textoAuxiliar = texto;
    let espacios = 0;
    let cantidadMayusculas = 0;
    let cantidadMinusculas = 0;
    
    // Quitar los espacios
    espacios = texto.indexOf(" ");
    while(espacios !== -1){
        texto = texto.substring(0, espacios) + texto.substring(espacios+1);
        espacios = texto.indexOf(" ");
    }

    console.log(texto)

    // Contar mayúsculas y minúsculas
    for(let i = 0; i < texto.length; i++){
        let asciiLetra = texto.charCodeAt(i);
        console.log(asciiLetra);

        if(65 <= asciiLetra && asciiLetra <= 90){
            console.log("Entré aquí")
            cantidadMayusculas++
        }

        if(97 <= asciiLetra && asciiLetra <= 122){
            cantidadMinusculas++
        }
    }

    document.querySelector("#pMostrar").innerHTML = `
        Texto: "${textoAuxiliar}"<br>
        La cantidad de mayúsculas es: ${cantidadMayusculas}<br>
        La cantidad de minúsucuas es: ${cantidadMinusculas}
        `;
    
}