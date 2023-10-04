document.querySelector("#btnBoton").addEventListener("click", convertir);

function convertir() {
  const texto = document.querySelector("#txtTexto").value;
  let contador = 0;

  for (let i = 0; i < texto.length; i++) {
    if (texto.charAt(i) === texto.charAt(0)) {
      contador++;
    }
  }

  document.querySelector(
    "#pMostrar"
  ).innerHTML = `La primer letra de la palabra aparece ${contador} veces.`;
}
