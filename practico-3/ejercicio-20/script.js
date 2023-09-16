document.querySelector("#btnBoton").addEventListener("click", maximoComunDivisor);

function maximoComunDivisor(){
    const num1 = Number(document.querySelector("#txtNumero1").value);
    const num2 = Number(document.querySelector("#txtNumero2").value);

    let dividendo = num1;
    let divisor = num2;
    let mcd;
    
    while(divisor > 0){
        // Guardo el valor de divisor en una variable auxiliar
        let divisorAuxiliar = mcd = divisor;

        divisor = dividendo % divisor;
        
        // Actualizo dividendo con el valor del divisor para 
        // las operaciones en el siguiente bucle
        dividendo = divisorAuxiliar;
        console.log(divisor);
    }

    document.querySelector("#pParrafo").innerHTML = `El MCD entre ${num1} y ${num2} es: ${mcd}.`;
}