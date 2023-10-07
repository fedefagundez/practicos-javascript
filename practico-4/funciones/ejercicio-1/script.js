document
  .getElementById("btnBoton")
  .addEventListener("click", mostrarCantidadPares);

function mostrarCantidadPares() {
  const numero1 = document.getElementById("txtNumero1").value;
  const numero2 = document.getElementById("txtNumero2").value;
  const cantidadDePares = contarParesEntreDosNumeros(
    Number(numero1),
    Number(numero2)
  );

  document.getElementById(
    "pMostrar"
  ).innerHTML = `La cantidad de pares entre ${numero1} y ${numero2} es ${cantidadDePares}.`;
}

/**
 *
 * @param {Number} n1
 * @param {Number} n2
 * @returns {Number} Retorna la cantidad de números pares entre n1 y n2.
 */
function contarParesEntreDosNumeros(n1, n2) {
  let contador = 0;
  for (let i = n1; i <= n2; i++) {
    if (i % 2 === 0) {
      contador++;
    }
  }
  return contador;
}
