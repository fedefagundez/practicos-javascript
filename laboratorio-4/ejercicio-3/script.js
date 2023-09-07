document.querySelector("button").addEventListener("click", contarHastaCien);

function contarHastaCien(){
    let resultado = '';
    for(let i = 0; i <= 50; i++){
        if(i % 2 === 0){
            resultado += i + '<br>';
        }
    }
    document.querySelector('p').innerHTML = resultado;
}