let contadorMayores20 = 0;
let contadorMultiplos5 = 0;
let contadorGeneral = 0;
let cont = 0;

document.querySelector("button").addEventListener("click", contar);

function contar() {
  document.querySelector("p").innerHTML = "";

  const numero = document.querySelector("#valor").value;

  if (numero % 5 === 0) {
    contadorMultiplos5++;
    contadorGeneral++;
  }
  if (numero > 20) {
    contadorMayores20++;
    contadorGeneral++;
  }

  document.querySelector("#valor").value = "";

  cont++;

  if (cont === 5) {
    document.querySelector("p").innerHTML = `
        Multiplos de 5: ${contadorMultiplos5}<br>
        Mayores de 20: ${contadorMayores20}<br>
        Mayores de 20 y multiplos de 5: ${contadorGeneral}`;
    contadorGeneral = 0;
    contadorMultiplos5 = 0;
    contadorMayores20 = 0;
  }
}
