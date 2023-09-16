document.querySelector("#btnBoton").addEventListener("click", mostrarDel40Al10);

function mostrarDelUnoAlCien(){
    let parrafo = '';
    for(let i = 40; i >= 10; i--){
        parrafo += `${i}<br>`;
    }
    document.querySelector("#pParrafo").innerHTML = parrafo;
}