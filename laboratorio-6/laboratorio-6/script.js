document.querySelector("#btnAgregar").addEventListener("click", agregarNumero);
document.querySelector("#btnMostrar").addEventListener("click", mostrarNumeros);
document
  .querySelector("#btnBuscarMayor")
  .addEventListener("click", encontrarMayor);

let numeros = [];

function agregarNumero() {
  const numero = document.querySelector("#txtNumero").value;

  if (!comprobarElementoEnArray(numeros, numero)) {
    numeros.push(numero);
  }

  document.querySelector("#txtNumero").value = "";
}

function mostrarNumeros() {
  let txtMostrar = "";

  for (let i = 0; i < numeros.length; i++) {
    txtMostrar += `${numeros[i]} `;
  }

  document.querySelector("#pMostrar").innerHTML = txtMostrar;
}

function encontrarMayor() {
  let mayor = numeros[0];

  for (let i = 0; i < numeros.length; i++) {
    if (elPrimeroEsMayor(mayor, numeros[i])) {
      mayor = numeros[i];
    }
  }

  document.querySelector("#pMostrarMayor").innerHTML = `El mayor es ${mayor}`;
}

// ======================= FUNCIONES ====================
/**
 *
 * @param {Array} arreglo
 * @param {*} elemento
 * @returns Devuelve true si encuentra el elemento en el arreglo, de otra forma devuelve false.
 */
function comprobarElementoEnArray(arreglo, elemento) {
  if (arreglo.indexOf(elemento) === -1) {
    return false;
  }
  return true;
}

/**
 *
 * @param {Number} num1
 * @param {Number} num2
 * @returns Retorna true si num1 es menor a num2, de lo contrario devuelve false.
 */
function elPrimeroEsMayor(num1, num2) {
  if (num1 < num2) {
    return true;
  }
  return false;
}
