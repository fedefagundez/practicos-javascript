document.querySelector('button').addEventListener('click', mostrarNumeros);

function mostrarNumeros(){
    let valor1 = Number(document.querySelector('#valor1').value);
    let valor2 = Number(document.querySelector('#valor2').value);
    let resultado = '';

    if(valor1 > valor2){
        let aux = valor1;
        valor1 = valor2;
        valor2 = aux;
    }

    for(let i = valor1; i <= valor2; i++){
        if(i !== valor2){
            resultado += i + ',';
        } else {
            resultado += i;
        }
    }
    
    document.querySelector('p').innerHTML = resultado;
}