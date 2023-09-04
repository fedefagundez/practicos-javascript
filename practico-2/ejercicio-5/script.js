document.querySelector("button").addEventListener("click", mayorQue20);

function mayorQue20() {
  const valor = document.querySelector("#valor").value;
  let mensaje = "";

  if (10 < valor && valor < 20) {
    mensaje = "El número es mayor que diez y menor que veinte.";
  } else {
    mensaje = "El número no es mayor que diez y menor que veinte.";
  }

  document.querySelector("p").innerHTML = mensaje;

  document.querySelector("#valor").value = "";
}
