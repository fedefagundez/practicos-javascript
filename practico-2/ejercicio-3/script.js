document.querySelector("button").addEventListener("click", mayorQue20);

function mayorQue20() {
  const valor = document.querySelector("#valor").value;
  let mensaje = "";

  if (valor > 20) {
    mensaje = "Mayor que veinte.";
  } else {
    mensaje = "Menor o igual a veinte.";
  }

  document.querySelector("p").innerHTML = mensaje;

  document.querySelector("#valor").value = "";
}
