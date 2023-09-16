document.querySelector("#btnBoton").addEventListener("click", mostrarDelUnoAlCien);

function mostrarDelUnoAlCien(){
    let numero = Number(document.querySelector("#txtNumero").value);
    let parrafo = '';
    for(let i = 31; i < 200; i++){
        if(i % numero === 0 && i % 2 === 0)
        parrafo += `${i}<br>`;
    }
    document.querySelector("#pParrafo").innerHTML = parrafo;
}