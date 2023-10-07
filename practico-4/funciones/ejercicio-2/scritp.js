document.getElementById("btnBoton").addEventListener("click", mostrarBisiesto);

function mostrarBisiesto() {
  const año = Number(document.getElementById("txtAño").value);

  if (esBisiesto(año)) {
    document.getElementById("pMostrar").innerHTML = "Es bisiesto.";
  } else {
    document.getElementById("pMostrar").innerHTML = "Es no es bisiesto.";
  }
}

/**
 *
 * @param {Number} año
 * @returns {Boolean} Retorna true si es año es bisiesto o false de lo contrario.
 */
function esBisiesto(año) {
  if (año % 400 === 0) {
    return true;
  } else if (año % 100 === 0) {
    return false;
  } else if (año % 4 === 0) {
    return true;
  }
  return false;
}
