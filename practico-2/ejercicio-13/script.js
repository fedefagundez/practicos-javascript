document.querySelector("button").addEventListener("click", evaluar);

function evaluar() {
    const valor1 = document.querySelector("#valor1").value;
    const valor2 = document.querySelector("#valor2").value;
    mensaje = "El primero no es múltiplo del segundo."

    if(valor1 % valor2 === 0) {
        mensaje = "El primero es multiplo del segundo."
    }

    document.querySelector("p").innerHTML = mensaje;
}
