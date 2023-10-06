document
  .querySelector("#btnBoton")
  .addEventListener("click", comprobarPalindromo);

function comprobarPalindromo() {
  const PALABRA = document.querySelector("#txtPalabra").value;
  let esPalindromo = true;
  let i = 0; // Recorre la palabra de adelante hacia atrás.
  let j = PALABRA.length - 1; // Recorre la palabra de atrás hacia adelante.

  while (i <= j && esPalindromo) {
    if (PALABRA.charAt(i).toUpperCase() !== PALABRA.charAt(j).toUpperCase()) {
      esPalindromo = false;
    }
    i++;
    j--;
  }

  if (esPalindromo) {
    document.querySelector("#pMostrar").innerHTML = "Es palíndromo.";
  } else {
    document.querySelector("#pMostrar").innerHTML = "No es palíndromo.";
  }
}
