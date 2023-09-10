document.querySelector("button").addEventListener("click", jugar);

let parrafo = document.querySelector("p");
let numeroParaAdivinar = undefined;
let contador = 0;

function jugar(){
    const numero = document.querySelector("#numero").value;
    let distancia = Math.abs(Number(numero) - numeroParaAdivinar);

    if(numeroParaAdivinar === undefined){
        numeroParaAdivinar = numero;
        mensaje = `Jugador 2: Adivine el número...`
    } else {
        contador++;
        if (distancia > 15) mensaje = "Estas lejos...";
        else if (distancia > 10 && distancia <= 15) mensaje = "Te etas acercando...";
        else if (distancia > 5 && distancia <= 10) mensaje = "Cada vez más cerca...";
        else if (distancia >= 1 && distancia <= 5) mensaje = "Muy pero muy cerca...";
        else {
            mensaje = `¡ACERTASTE! Lo lograsté en ${contador} intentos.`
            document.querySelector("button").disabled = true;
        }
    }

    parrafo.innerHTML = mensaje;
    document.querySelector("#numero").value = "";
}