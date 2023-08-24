document.querySelector("#cambio").value = 39.15;

document.querySelector("button").addEventListener("click", () => {
  const montoEnPesos = Number(document.querySelector("#pesos").value);
  const cambio = Number(document.querySelector("#cambio").value);
  const montoEnDolares = (montoEnPesos / cambio).toFixed(2);

  document.querySelector(
    "p"
  ).innerHTML = `$${montoEnPesos} equivalen a U$S${montoEnDolares}`;
});
