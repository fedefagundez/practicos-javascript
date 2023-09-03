document.querySelector("button").addEventListener("click", restar);

function restar(){
    const valor1 = Number(document.querySelector("#valor1").value);
    const valor2 = Number(document.querySelector("#valor2").value);
    let resta;

    if (valor1 < valor2) {
        resta = valor2 - valor1;
    } else {
        resta = valor1 - valor2;
    }
    document.querySelector('p').innerHTML = resta;

    document.querySelector("#valor1").value = '';
    document.querySelector("#valor2").value = '';
}