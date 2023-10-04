document.querySelector("#btnBoton").addEventListener("click", convertir);

function convertir() {
  const texto = document.querySelector("#txtTexto").value;
  let textoEncriptado = "";

  for (let i = 0; i < texto.length; i++) {
    switch (texto.charAt(i).toLowerCase()) {
      case "a":
        textoEncriptado += "4";
        break;
      case "e":
        textoEncriptado += "3";
        break;
      case "i":
        textoEncriptado += "1";
        break;
      case "o":
        textoEncriptado += "0";
        break;
      case "u":
        textoEncriptado += "8";
        break;
      default:
        textoEncriptado += texto.charAt(i);
    }
  }

  document.querySelector(
    "#pMostrar"
  ).innerHTML = `El texto encriptado es: ${textoEncriptado}`;
}
