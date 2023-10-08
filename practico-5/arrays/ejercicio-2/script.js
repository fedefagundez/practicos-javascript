const palabras = [];

document.querySelector("#btnBoton").addEventListener("click", ingresarPalabra);
document
  .querySelector("#btnBotonMostrar")
  .addEventListener("click", mostrarPalabras);

function ingresarPalabra() {
  const palabra = document.querySelector("#txtPalabra").value;

  palabras.push(palabra);
}

function mostrarPalabras() {
  let mostrar = "";
  for (let i = 0; i < palabras.length; i++) {
    mostrar += `${palabras[i]}<br>`;
  }

  document.querySelector("#pMostrar").innerHTML = mostrar;
}
