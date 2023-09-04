document.querySelector("button").addEventListener("click", mayorMenor);

function mayorMenor() {
  const valor = document.querySelector("#valor").value;
  let mensaje = "";

  if (valor < 0) {
    mensaje = "El número es negativo.";
  } else if (valor > 0) {
    mensaje = "El número es postivo.";
  } else {
    mensaje = "El número es cero.";
  }

  document.querySelector("p").innerHTML = mensaje;

  document.querySelector("#valor").value = "";
}
