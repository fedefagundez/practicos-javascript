document.querySelector("button").addEventListener("click", () => {
  const subTotal = Number(document.querySelector("#importe").value);
  const IVA = 0.23;
  const total = subTotal * (1 + IVA);

  document.querySelector("#p1").innerHTML = `El monto total es: ${total.toFixed(
    2
  )}`;
});
