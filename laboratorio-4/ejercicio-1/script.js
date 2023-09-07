document.querySelector("button").addEventListener("click", contarHastaCien);

function contarHastaCien(){
    let resultado = '';
    for(let i = 0; i <= 100; i++){
        resultado += i + ',';
    }
    document.querySelector('p').innerHTML = resultado;
}