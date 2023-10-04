document.querySelector("#btnBoton").addEventListener("click", convertir);

function convertir() {
  const texto = document.querySelector("#txtTexto").value;
  let textoInvertido = "";

  for (let i = 0; i < texto.length; i++) {
    textoInvertido = texto.charAt(i) + textoInvertido;
  }

  document.querySelector(
    "#pMostrar"
  ).innerHTML = `El texto invertido es: ${textoInvertido}`;
}
