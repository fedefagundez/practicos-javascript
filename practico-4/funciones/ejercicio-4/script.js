document
  .getElementById("btnBoton")
  .addEventListener("click", mostrarEnFaharenheit);

function mostrarEnFaharenheit() {
  const tempCelcius = document.getElementById("txtTempCelcius").value;
  let tempFahrenheit = convertirDeCaF(tempCelcius);

  document.getElementById(
    "pMostrar"
  ).innerHTML = `La temperatura es ${tempFahrenheit}ºF`;
}

/**
 *
 * @param {Number} c Temperatura en ºC.
 * @returns {Number} Temperatura en ºF.
 */
function convertirDeCaF(c) {
  return 1.8 * c + 32;
}
