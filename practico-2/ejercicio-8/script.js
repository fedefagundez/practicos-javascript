document.querySelector("button").addEventListener("click", evaluar);

function evaluar() {
  const valor = document.querySelector("#valor").value;
  let mensaje = "";

  if (30 < valor) {
    mensaje = "Es mayor que treinta.";
  } else if (valor < 10) {
    mensaje = "Es menor que diez.";
  } else {
    mensaje = "Entre diez y treinta.";
  }

  document.querySelector("p").innerHTML = mensaje;

  document.querySelector("#valor").value = "";
}
