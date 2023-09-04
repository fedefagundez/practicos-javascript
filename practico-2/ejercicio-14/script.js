document.querySelector("button").addEventListener("click", calcularDestino);

function calcularDestino(){
    let millas = document.querySelector("#millas").value;
    const plus = document.querySelector("#plus").value;
    let mensaje = "";

    if(plus === "S"){
        millas *= 2;
    }

    if(millas >= 60000){
        mensaje = `Puede viajar a Europa como destino más lejano.`;
    } else if(30000 >= millas && millas < 60000){
        mensaje = `Puede viajar a America del Norte como destino más lejano.`;
    } else if(15000 >= millas && millas <30000) {
        mensaje = `Puede viajar a America del Sur como destino más lejano.`;
    } else {
        mensaje = `No dispone de las millas suficientes.`;
    }

    document.querySelector("p").innerHTML = mensaje;
}