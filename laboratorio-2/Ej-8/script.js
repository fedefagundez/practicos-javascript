document.querySelector("button").addEventListener("click", () => {
  const lado = Number(document.querySelector("input").value);
  const area = lado * lado;
  const perimetro = 4 * lado;

  console.log(area, perimetro);

  document.querySelector(
    "p"
  ).innerHTML = `El area del cuadrado de lado ${lado} es ${area}cm<sup>2</sup> y su perímetro es ${perimetro} cm`;
});
