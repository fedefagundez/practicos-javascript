document.getElementById("btnBoton").addEventListener("click", mostrarArea);

function mostrarArea() {
  const base = document.getElementById("txtBase").value;
  const altura = document.getElementById("txtAltura").value;

  if (calcularArea(base, altura) === -1) {
    document.getElementById(
      "pMostrar"
    ).innerHTML = `Base y altura deben ser valores numéricos.`;
  }
  document.getElementById("pMostrar").innerHTML = `El área es ${calcularArea(
    base,
    altura
  )}`;
}

/**
 *
 * @param {Number} base
 * @param {Number} altura
 * @returns {Number} Retorna el área del triángulo o -1 en caso de que lo argumentos no sean números.
 */
function calcularArea(base, altura) {
  if (
    isNaN(Number(base)) ||
    (base === "" && isNaN(Number(altura))) ||
    altura === ""
  ) {
    return -1;
  }
  return (Number(base) * Number(altura)) / 2;
}
