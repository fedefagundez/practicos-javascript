document.querySelector("#btnBoton").addEventListener("click", encontrar);

function encontrar() {
  const PALABRA = document.querySelector("#txtPalabra").value;
  const ubicacionPenultimaA = encontrarPenultimaA(PALABRA);
  const parrafo = document.querySelector("#pMostrar");

  if (ubicacionPenultimaA === -1) {
    parrafo.innerHTML = 'La letra "a" aparece solo una vez o ninguna.';
  } else {
    parrafo.innerHTML = `La penultima ocurrencia de "a" es en el índice ${ubicacionPenultimaA}`;
  }
}

/**
 *
 * @param {String} palabra
 * @returns {Number} Devuelve el indice de la penúltima ocurrencia de "a" o -1 en caso de que aparezca una ninguna vez.
 */
function encontrarPenultimaA(palabra) {
  palabraAux = palabra.toLowerCase();

  if (palabraAux.indexOf("a") === palabraAux.lastIndexOf("a")) {
    return -1;
  } else {
    return palabraAux.substring(0, palabraAux.lastIndexOf("a")).indexOf("a");
  }
}
