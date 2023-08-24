document.querySelector("button").addEventListener("click", () => {
  const lado = Number(document.querySelector("#lado").value);

  document.querySelector("p").innerHTML = `El área del cuadrado es: ${
    lado * lado
  }`;
});
