document.querySelector("button").addEventListener("click", () => {
  const alto = Number(document.querySelector("#alto").value);
  const ancho = Number(document.querySelector("#ancho").value);
  const area = alto * ancho;
  const perimetro = 2 * alto + 2 * ancho;

  document.querySelector(
    "p"
  ).innerHTML = `El área del rectángulo ${area} cm<sup>2</sup>, y su perímetro es ${perimetro} cm.`;
});
