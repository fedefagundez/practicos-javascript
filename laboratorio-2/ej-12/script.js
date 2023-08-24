document.querySelector("button").addEventListener("click", () => {
  let cantidad = Number(document.querySelector("#cantidad").value);
  const porcion = Number(document.querySelector("#porcion").value);
  const dieta = Number(document.querySelector("#dieta").value);

  const porcionModificada = porcion * dieta;

  cantidad = cantidad - porcionModificada;

  document.querySelector("#cantidad").value = cantidad;

  document.querySelector(
    "p"
  ).innerHTML = `Se entregaron ${porcionModificada}. Queda comida disponible para ${Math.trunc(
    cantidad / porcionModificada
  )} porciones para entregar si el perro come la cantidad recomendada`;
});
