document.querySelector("button").addEventListener("click", calcular);

function calcular() {
    const ingresos = Number(document.querySelector("#ingresos").value);
    const valorInmueble = Number(document.querySelector("#valor").value);
    let cuotaInicial = 0;
    let cuotaMensual = 0;
    let cantidadCoutas = 0;

    if(ingresos < 20000){
        cuotaInicial = (valorInmueble * 0.15).toFixed(2);
        cantidadCoutas = 12 * 6 + 11;
        cuotaMensual = ((valorInmueble * 0.85)/cantidadCoutas).toFixed(2);
    } 

    if(ingresos >= 20000){
        cuotaInicial = (valorInmueble * 0.30).toFixed(2);
        cantidadCoutas = 11;
        cuotaMensual = ((valorInmueble * 0.70)/cantidadCoutas).toFixed(2);
    }

    document.querySelector("p").innerHTML = `Deberá abonar un monto inicial de $${cuotaInicial} y ${cantidadCoutas} cuotas de $${cuotaMensual}`;
}