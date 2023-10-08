let palabras = [];

document.querySelector("#btnAgregar").addEventListener("click", agregarPalabra);
document
  .querySelector("#btnEliminar")
  .addEventListener("click", eliminarPalabra);

function agregarPalabra() {
  const palabra = document.querySelector("#txtPalabra").value;
  document.querySelector("#pMensajeError").innerHTML = "";
  document.querySelector("#pMostrar").innerHTML = "";
  palabras.push(palabra);
}

function eliminarPalabra() {
  const palabra = document.querySelector("#txtPalabra").value;
  let palabraEsta = false;
  let palabrasAux = [];

  document.querySelector("#pMensajeError").innerHTML = "";
  document.querySelector("#pMostrar").innerHTML = "";

  for (let i = 0; i < palabras.length; i++) {
    if (palabra !== palabras[i]) {
      palabrasAux.push(palabras[i]);
    } else {
      palabraEsta = true;
    }
  }
  palabras = [...palabrasAux];

  if (palabraEsta) {
    document.querySelector("#pMostrar").innerHTML = palabras;
  } else {
    document.querySelector("#pMostrar").innerHTML = "";
    document.querySelector("#pMensajeError").innerHTML = "Ha ocurrido un error";
  }
}
