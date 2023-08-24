document.querySelector("button").addEventListener("click", () => {
  const monto = Number(document.querySelector("#importe").value);
  const recargo = Number(document.querySelector("#recargo").value);
  const total = monto * (1 + recargo / 100);

  document.querySelector(
    "p"
  ).innerHTML = `El monto con el ${recargo}% recargo es: ${total}`;
});
