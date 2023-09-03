document.querySelector("button").addEventListener("click", calcular);

function calcular() {
    const valor1 = Number(document.querySelector("#valor1").value);
    const valor2 = Number(document.querySelector("#valor2").value);
    const operacion = document.querySelector("#operacion").value;
    let resultado = 0;

    switch (operacion) {
        case "M":
            resultado = valor1 * valor2;
            break;
        case "D":
            resultado = trunc(valor1 * valor2);
            break;
        case "MOD":
            resultado = valor1 % valor2;
            break;
        case "S":
            resultado = valor1 + valor2;
            break;
        case "R":
            resultado = valor1 + valor2;
    }

    document.querySelector("p").innerHTML = `Resultado = ${resultado}`;

    document.querySelector("#valor1").value = "";
    document.querySelector("#valor2").value = "";
    document.querySelector("#operacion").value = "-1";

}