let contador = 0;
let suma = 0;
let promedio;
let maximo;

document.querySelector("button").addEventListener("click", sumaMaximoPromedio);

function sumaMaximoPromedio () {
    const numero = Number(document.querySelector("#numero").value);

    // Encontrar el máximo
    if (contador === 0) {
        maximo = numero;
    }

    if (maximo < numero) {
        maximo = numero;
    }

    // Suma
    suma += numero;

    contador++;

    if (contador === 5) {
        promedio = Math.round(suma / contador);
        document.querySelector("p").innerHTML = `La suma es ${suma}, el promedio es ${promedio} y el máximo es ${maximo}.`
        contador = 0;
        suma = 0;
    }
}