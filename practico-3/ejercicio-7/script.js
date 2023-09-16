document.querySelector("#btnBoton").addEventListener("click", mostrarDelUnoAlCien);

function mostrarDelUnoAlCien(){
    let numero = Number(document.querySelector("#txtNumero").value);
    let parrafo = '';
    for(let i = 0; i < numero; i++){
        parrafo += '-';
    }
    document.querySelector("#pParrafo").innerHTML = parrafo;
}