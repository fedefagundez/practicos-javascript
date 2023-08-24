document.querySelector("button").addEventListener("click", () => {
  const costoAuto = Number(document.querySelector("#modelo").value);
  const recargo = Number(document.querySelector("#formaPago").value);
  const plusTransferencia = Number(
    document.querySelector("#transferencia").value
  );

  const montoTotal = costoAuto * recargo + plusTransferencia;

  document.querySelector(
    "p"
  ).innerHTML = `El auto seleccionado tiene un costo de ${montoTotal} pagándolo en la modalidad seleccionada.`;
});
