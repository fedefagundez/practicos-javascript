document.querySelector("#btnBoton").addEventListener("click", mostrarDelMenos100Al10);

function mostrarDelUnoAlCien(){
    let parrafo = '';
    for(let i = -100; i <= 10; i++){
        console.log(i);
        parrafo += `${i}<br>`;
    }
    document.querySelector("#pParrafo").innerHTML = parrafo;
}