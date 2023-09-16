document.querySelector("#btnBoton").addEventListener("click", mostrarDelMenosTreintaAl230);

function mostrarDelMenosTreintaAl230(){
    let parrafo = '';
    for(let i = -33; i <= 230; i++){
        if(i % 4 === 0){
            parrafo += `${i}<br>`
        }
    }
    document.querySelector("#pParrafo").innerHTML = parrafo;
}