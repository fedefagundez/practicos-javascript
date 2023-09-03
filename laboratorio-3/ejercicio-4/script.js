document.querySelector("button").addEventListener("click", comparar);

function comparar(){
    const valor1 = Number(document.querySelector("#valor1").value);
    const valor2 = Number(document.querySelector("#valor2").value);
    let mensaje;

    if (valor1 === valor2) {
        mensaje = "Los números son iguales";
    } else if (valor1 < valor2) {
        mensaje = `${valor1} es menor que ${valor2}`;
    } else {
        mensaje = `${valor2} es menor que ${valor1}`;
    }
    
    document.querySelector('p').innerHTML = mensaje;

    document.querySelector("#valor1").value = '';
    document.querySelector("#valor2").value = '';
}