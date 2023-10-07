document.querySelector("#btnBoton").addEventListener("click", mostrarInvertido);

function mostrarInvertido() {
  const texto = document.querySelector("#txtTexto").value;

  document.querySelector(
    "#pMostrar"
  ).innerHTML = `El texto invertido es: "${invertirTexto(texto)}"`;
}

/**
 *
 * @param {String} texto
 * @returns {String} Devuelve la cadena texto invertida.
 */
function invertirTexto(texto) {
  let textoInvertido = "";

  for (let i = 0; i < texto.length; i++) {
    textoInvertido = texto[i] + textoInvertido;
  }

  return textoInvertido;
}
