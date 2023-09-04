document.querySelector("button").addEventListener("click", calcular);

function calcular() {
    const monto = document.querySelector("#monto").value;
    const conTarjeta = document.querySelector("#tarjeta").value;
    let costoFinal = 0;
    mensaje = "";

    if(monto < 10000 && conTarjeta === "S"){
        costoFinal = monto * 0.96;
        mensaje = `Pago de $${monto} con tarjeta, costo final -> $${costoFinal}`;
    } else if(monto >= 10000 && conTarjeta === "S"){
        costoFinal = monto;
        mensaje = `Pago de $${monto} con tarjeta, costo final -> $${costoFinal}`;
    } else if(conTarjeta === "N"){
        costoFinal = monto;
        mensaje = `Pago de $${monto} sin tarjeta, costo final -> $${costoFinal}`;
    }

    document.querySelector("p").innerHTML = mensaje;

}