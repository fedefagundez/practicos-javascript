document.querySelector("button").addEventListener("click", calcular);

function calcular() {
  const cantidadNoches = Number(document.querySelector("#cantNoches").value);
  const formaPago = document.querySelector("#tipoPago").value;
  const tarifaPorNoche = 40;
  let tarifaTotal = 0;
  let cantidadTotalNoches = 0;
  let mensaje = "";

  if (cantidadNoches >= 7 && formaPago === "T") {
    cantidadTotalNoches = cantidadNoches + 3;
    tarifaTotal = cantidadNoches * tarifaPorNoche;
    mensaje = `${cantidadNoches} de noches pagadas con tarjeta -> hay 3 noches de regalo, el usuario se hospeda ${cantidadTotalNoches}, el costo total son $${tarifaTotal}`;
  } else if (cantidadNoches >= 7 && formaPago === "E") {
    cantidadTotalNoches = cantidadNoches + 2;
    tarifaTotal = cantidadNoches * tarifaPorNoche;
    mensaje = `${cantidadNoches} de noches pagadas en efectivo -> hay 2 noches de regalo, el usuario se hospeda ${cantidadTotalNoches}, el costo total son $${tarifaTotal}`;
  } else if (cantidadNoches >= 3 && cantidadNoches < 7 && formaPago === "T") {
    cantidadTotalNoches = cantidadNoches + 1;
    tarifaTotal = cantidadNoches * tarifaPorNoche;
    mensaje = `${cantidadNoches} de noches pagadas con tarjeta -> hay 1 noche de regalo, el usuario se hospeda ${cantidadTotalNoches}, el costo total son $${tarifaTotal}`;
  } else if (cantidadNoches >= 3 && cantidadNoches < 7 && formaPago === "E") {
    cantidadTotalNoches = cantidadNoches + 1;
    tarifaTotal = cantidadNoches * tarifaPorNoche;
    mensaje = `${cantidadNoches} de noches pagadas en efectivo -> hay 1 noche de regalo, el usuario se hospeda ${cantidadTotalNoches}, el costo total son $${tarifaTotal}`;
  } else if (cantidadNoches < 3 && formaPago === "T") {
    cantidadTotalNoches = cantidadNoches;
    tarifaTotal = cantidadNoches * tarifaPorNoche;
    mensaje = `${cantidadNoches} de noches pagadas con tarjeta -> hay 0 noches de regalo, el usuario se hospeda ${cantidadTotalNoches}, el costo total son $${tarifaTotal}`;
  } else {
    cantidadTotalNoches = cantidadNoches;
    tarifaTotal = cantidadNoches * tarifaPorNoche;
    mensaje = `${cantidadNoches} de noches pagadas en efectivo -> hay 0 noches de regalo, el usuario se hospeda ${cantidadTotalNoches}, el costo total son $${tarifaTotal}`;
  }
  document.querySelector("p").innerHTML = mensaje;
}
