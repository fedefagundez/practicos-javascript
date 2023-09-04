document.querySelector("button").addEventListener("click", multiploTresSiete);

function multiploTresSiete() {
    const valor = document.querySelector("#valor").value;
    let mensaje = "";

    if (valor % 3 === 0 && valor % 7 === 0){
        mensaje = 'El número es multiplo de 3 y 7.'
    }

    document.querySelector("p").innerHTML = mensaje;

    document.querySelector("#valor").value = "";
}