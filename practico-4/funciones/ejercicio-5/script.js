document
  .getElementById("btnBoton")
  .addEventListener("click", mostrarTemperaturaConvertida);

function mostrarTemperaturaConvertida() {
  const tempFahrenheit = Number(
    document.getElementById("txtTemperatura").value
  );
  const unidad = document.getElementById("slctUnidades").value;
  const tempConvertida = convertir(tempFahrenheit, unidad);

  document.getElementById("pMostrar").innerHTML = `La temperatura es ${
    Math.round(tempConvertida * 100) / 100 // Redondea el valor a dos cifras después de la coma.
  }${unidad}`;
}

/**
 *
 * @param {Number} f Temperatura en grados Fahrenheit.
 * @param {String} unidad Unidad a la cual se desea convertir.
 * @returns {Number} Temperatura f convertida a la unidad elegida.
 */
function convertir(f, unidad) {
  switch (unidad) {
    case "ºC":
      return (f - 32) / 1.8;
      break;
    case "ºK":
      return (f + 459.67) / 1.8;
      break;
    case "ºRa":
      return (f - 32) / 2.25;
      break;
    case "ºRe":
  }
}
