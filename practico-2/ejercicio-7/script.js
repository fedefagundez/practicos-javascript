document.querySelector("button").addEventListener("click", evaluar);

function evaluar() {
  const valor = document.querySelector("#valor").value;
  let mensaje = "";

  if (valor < -20 || 20 < valor) {
    mensaje = "CUMPLE";
  } else {
    mensaje = "NO CUMPLE";
  }

  document.querySelector("p").innerHTML = mensaje;

  document.querySelector("#valor").value = "";
}
