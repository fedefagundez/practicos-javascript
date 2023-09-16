document.querySelector("#btnBoton").addEventListener("click", mostrarDelUnoAlCien);

function mostrarDelUnoAlCien(){
    let ancho = Number(document.querySelector("#txtNumero1").value);
    let alto = Number(document.querySelector("#txtNumero2").value);
    let parrafo = '';
    let simbolo = 'O';

    for(let i = 0; i<alto; i++){
        for(let j = 0; j<ancho; j++){
           parrafo += simbolo; 
        }
        parrafo += '<br>'
    }

    document.querySelector("#pParrafo").innerHTML = parrafo;

}



