let contador = 0;
document.querySelector("button").addEventListener("click", () => {
  contador++;
  document.querySelector("p").innerHTML = contador;
});
