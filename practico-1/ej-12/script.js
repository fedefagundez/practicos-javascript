document.querySelector("button").addEventListener("click", () => {
  const peso = document.querySelector("#peso").value;
  const altura = document.querySelector("#altura").value;

  const imc = ((peso / altura) * altura).toFixed(2);

  document.querySelector("p").innerHTML = `IMC = ${imc}`;
});
