document.querySelector("#btnBoton").addEventListener("click", calcular);

function calcular() {
  const texto = document.querySelector("#txtTexto").value;
  let suma = 0;

  for (let i = 0; i < texto.length; i++) {
    let numeros = "0123456789";
    if (numeros.indexOf(texto.charAt(i)) > 0) {
      suma += Number(texto.charAt(i));
    }
  }

  document.querySelector(
    "#pMostrar"
  ).innerHTML = `La suma de los números del texto es: ${suma}`;
}
