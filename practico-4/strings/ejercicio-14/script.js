document.querySelector("#btnBoton").addEventListener("click", convertir);

function convertir() {
  const matricula = document.querySelector("#txtTexto").value;
  const primerParteMatricula = matricula.substring(0, 3);
  const segundaParteMatricula = matricula.substring(4);
  const NUMEROS = "0123456789";
  const LETRAS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let contadorLetras = 0;
  let contadorNumeros = 0;
  let mensaje = "";

  for (let i = 0; i < primerParteMatricula.length; i++) {
    if (NUMEROS.indexOf(segundaParteMatricula.charAt(i).toUpperCase()) >= 0) {
      contadorLetras++;
    }
  }

  for (let i = 0; i < segundaParteMatricula.length; i++) {
    if (NUMEROS.indexOf(segundaParteMatricula.charAt(i)) >= 0) {
      contadorNumeros++;
    }
  }
  console.log(primerParteMatricula, segundaParteMatricula);
  console.log(`Cantidad de letras ${contadorLetras}`);
  console.log(`Cantidad de números ${contadorNumeros}`);

  if ((contadorLetras === 1 || contadorLetras === 3) && contadorNumeros === 4) {
    mensaje = "La matrícula es correcta.";
  } else {
    mensaje = "La matrícula tiene errores.";
  }

  document.querySelector("#pMostrar").innerHTML = mensaje;
}
