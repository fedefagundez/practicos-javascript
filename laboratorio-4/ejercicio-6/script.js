document.querySelector('button').addEventListener('click', cuentaAtras);

function cuentaAtras(){
    let valor = document.querySelector('#valor').value;
    let mensaje = '';
    let existeError = false;

    if(valor === '' || isNaN(Number(valor))) {
        mensaje = 'Debe ingresar un valor numerico';
        existeError =true;
    }
    if(valor < 0){
        mensaje = 'Debe ingresar un numero mayor a cero';
        existeError =true;
    }

    valor = Number(valor);

    if(!existeError){
        for(let i = valor; i >= 0; i--){
            if(i !== 0){
                mensaje += i +',';
            } else {
                mensaje += i;
            }
            
        }
    } 
    
    document.querySelector('p').innerHTML = mensaje;
    
}