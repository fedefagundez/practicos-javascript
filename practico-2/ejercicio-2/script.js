document.querySelector("button").addEventListener("click", mayorQue10);

function mayorQue10() {
  const valor = document.querySelector("#valor").value;
  let mensaje = "";

  if (valor > 10) {
    mensaje = "Mayor que diez.";
  }

  document.querySelector("p").innerHTML = mensaje;

  document.querySelector("#valor").value = "";
}
