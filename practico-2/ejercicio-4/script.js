document.querySelector("button").addEventListener("click", valorAbsoluto);

function valorAbsoluto() {
  const valor = document.querySelector("#valor").value;
  let mensaje = "";

  if (valor < 0) {
    mensaje = `|${valor}| = ${-valor}`;
  } else {
    mensaje = `|${valor}| = ${valor}`;
  }

  document.querySelector("p").innerHTML = mensaje;

  document.querySelector("#valor").value = "";
}
