let contador = 0;
document.querySelector("button").addEventListener("click", () => {
  contador += 3;
  document.querySelector("p").innerHTML = contador;
});
