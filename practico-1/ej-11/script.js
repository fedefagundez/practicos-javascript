document.querySelector("button").addEventListener("click", () => {
  const subTotal = Number(document.querySelector("#importe").value);
  const total = subTotal * 1.23;

  document.querySelector("#p1").innerHTML = `El monto total es: ${total.toFixed(
    2
  )}`;
});
