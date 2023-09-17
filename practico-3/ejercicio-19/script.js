document.querySelector("#btnBoton").addEventListener("click", generarCalendario);

function generarCalendario(){
    const dia = document.querySelector("#slctDia").value;
    const mes = document.querySelector("#slctMes").value;
    let idFila;
    let cantidadDeDiasDelMes = 0;
    let fecha = 1;
    let celda = 0;

    // Crear filas
    document.querySelector("#cuerpoCalendario").innerHTML = `
    <tr id="fila1" align="center"></tr>
    <tr id="fila2" align="center"></tr>
    <tr id="fila3" align="center"></tr>
    <tr id="fila4" align="center"></tr>
    <tr id="fila5" align="center"></tr>
    <tr id="fila6" align="center"></tr>
    `

    // Seleccionar días del mes
    switch(mes){
        case "2":
            cantidadDeDiasDelMes = 28;
            break;
        case "1":
        case "3":
        case "5":
        case "7":
        case "8":
        case "10":
        case "12":
            cantidadDeDiasDelMes = 31;
            break;
        default:
            cantidadDeDiasDelMes = 30;
        
    }

    while(fecha <= cantidadDeDiasDelMes){

        // Seleccionar fila
        if(0 <= celda && celda <= 6){
            idFila = "#fila1";
        } else if(7 <= celda && celda <= 13){
            idFila = "#fila2";
        } else if(14 <= celda && celda <= 20){
            idFila = "#fila3";
        } else if(21 <= celda && celda <= 27){
            idFila = "#fila4";
        } else if(28 <= celda && celda <= 34){
            idFila = "#fila5";
        } else {
            idFila = "#fila6";
        };

        if(celda >= dia){
            document.querySelector(idFila).innerHTML += `<td>${fecha}</td>`;
            fecha++;
        } else {
            document.querySelector(idFila).innerHTML += "<td></td>";
        }

        celda++;
    }


};