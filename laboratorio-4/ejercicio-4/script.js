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

    let i = valor1;
    while(i <= valor2){
        if(i !== valor2){
            console.log('i: ' + i + 'valor2: ' + valor2);
            resultado += i + ',';
        } else {
            resultado += i;
        }
        i++;
    }
    
    document.querySelector('p').innerHTML = resultado;
}