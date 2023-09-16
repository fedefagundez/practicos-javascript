document.querySelector("#btnBoton").addEventListener("click", mostrarDelUnoAlCien);

function mostrarDelUnoAlCien(){
    let parrafo = '';
    for(let i = 1; i <= 1000; i++){
        console.log(i);
        parrafo += `${i}<br>`;
    }
    document.querySelector("#pParrafo").innerHTML = parrafo;
}