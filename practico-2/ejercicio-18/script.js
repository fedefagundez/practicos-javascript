let suma = 0;
let cont = 0;

document.querySelector("button").addEventListener("click", acumular);

function acumular() {

    document.querySelector("p").innerHTML = "";

    const numero = document.querySelector("#valor").value;

    if (numero < 0) {
        suma += -Number(numero);
    }

    cont++;

    if (cont === 6) {
        document.querySelector("p").innerHTML = `Resultado = ${suma}`;
        cont = 0;
        suma = 0;
    }

}