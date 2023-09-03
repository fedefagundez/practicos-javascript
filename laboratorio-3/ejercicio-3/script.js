document.querySelector("button").addEventListener("click", esPar);

function esPar() {
    const numero = Number(document.querySelector("#numero").value);
    let mensaje = "";

    if (numero % 2 === 0) {
        mensaje = "Es par";
    } else {
        mensaje = "No es par";
    }

    document.querySelector("p").innerHTML = mensaje;
    document.querySelector("#numero").value = "";
}