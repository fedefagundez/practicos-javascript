document.querySelector("#btnBoton").addEventListener("click", mostrarDel20AlMenos30);

function mostrarDel20AlMenos30(){
    let parrafo = '';
    for(let i = 20; i >= -30; i--){
        parrafo += `${i}<br>`;
    }
    document.querySelector("#pParrafo").innerHTML = parrafo;
}