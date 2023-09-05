let cont = 0;
let contadorPerdidos = 0;
let contadorSalvados = 0;
let contadorBuenaNota = 0;
let maximo = 0;
let minimo = 0;
let suma = 0;
let promedio = 0;

document.querySelector("button").addEventListener("click", informar);

function informar () {
    const nota = Number(document.querySelector("#nota").value);

    suma += nota;

    if(cont === 0){
        maximo = nota;
        minimo = nota;
    }
    
    if(maximo < nota){
        maximo = nota;
    }
    if(minimo > nota){
        minimo = nota;
    }

    if(nota >= 70){
        contadorSalvados++;
        if(nota > 90){
            contadorBuenaNota++;
        }
    } else {
        contadorPerdidos++;
    }

    cont++;

    promedio = (suma / cont).toFixed(2);

    document.querySelector("p").innerHTML = `
        Salvaron: ${contadorSalvados} estudiantes <br>
        Perdieron: ${contadorPerdidos} estudiantes <br>
        Salvaron con buena nota: ${contadorBuenaNota} estudiantes <br>
        Nota máxima: ${maximo} <br>
        Nota mínina: ${minimo} <br>
        Promedio: ${promedio}
    `

    document.querySelector("#nota").value = "";
}