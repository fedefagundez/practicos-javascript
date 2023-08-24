let acumulado = 0;
document.querySelector("p").innerHTML = 0;

document.querySelector("button").addEventListener("click", () => {
  acumulado = acumulado + Number(document.querySelector("input").value);
  document.querySelector("p").innerHTML = acumulado;
  document.querySelector("input").value = "";
});
