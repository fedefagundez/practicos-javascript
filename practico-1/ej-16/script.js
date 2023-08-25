document.querySelector("button").addEventListener("click", () => {
  const ganados = document.querySelector("#ganados").value;
  const empatados = document.querySelector("#empatados").value;

  const puntos = Number(ganados) * 3 + Number(empatados);

  document.querySelector("p").innerHTML = `Cantidad de puntos: ${puntos}`;
});
