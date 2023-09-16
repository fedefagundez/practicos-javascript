document.querySelector("#btnBoton").addEventListener("click", mostrarMultiplosDe5);

function mostrarMultiplosDe5(){
    let parrafo = '';
    for(let i = 1; i <= 450; i++){
        if(i % 5 === 0){
            parrafo += `${i}<br>`
        }
    }
    document.querySelector("#pParrafo").innerHTML = parrafo;
}