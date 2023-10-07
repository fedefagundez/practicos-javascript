document.getElementById("btnBoton").addEventListener("click", mostrarPotencia);

function mostrarPotencia() {
  const base = Number(document.getElementById("txtBase").value);
  const exponente = Number(document.getElementById("txtExponente").value);
  const potencia = calcularPotencia(base, exponente);

  document.getElementById(
    "pMostrar"
  ).innerHTML = `${base}<sup>${exponente}</sup> = ${potencia}`;
}

/**
 *
 * @param {Number} b
 * @param {Number} n
 * @returns {Number} Retorna la potencia de base b y exponente n.
 */
function calcularPotencia(b, n) {
  let potencia = 1;
  for (let i = 0; i < n; i++) {
    potencia *= b;
  }
  return potencia;
}
