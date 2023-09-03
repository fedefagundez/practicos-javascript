document.querySelector("button").addEventListener("click", calcularReceta);

function calcularReceta() {
    const tazasDeAzucar = Number(document.querySelector("#tzaAzucar").value);
    const gramosDeHarina = Number(document.querySelector("#grsHarina").value);
    const cucharadasDeAceite = Number(document.querySelector("#cdaAceite").value);
    const tazasDeAgua = Number(document.querySelector("#tzaAgua").value);
    let mensaje = "";
    let maximoDeRecetas = 0;

    const porcionesDeHarina = Math.trunc(gramosDeHarina / 100);

    if(tazasDeAgua < 0 || cucharadasDeAceite < 0 || tazasDeAzucar < 0 || porcionesDeHarina < 1){
        mensaje = 'No es posible realizar la receta';
    } else {
        maximoDeRecetas = tazasDeAgua;
        if(maximoDeRecetas > porcionesDeHarina){
            maximoDeRecetas = porcionesDeHarina;
        }
        if (maximoDeRecetas > cucharadasDeAceite) {
            maximoDeRecetas = cucharadasDeAceite;
        }
        if(maximoDeRecetas > tazasDeAzucar) {
            maximoDeRecetas = tazasDeAzucar;
        }
        mensaje = `El máximo de recetas posibles es: ${maximoDeRecetas}.`
    }
    document.querySelector("p").innerHTML = mensaje;
}