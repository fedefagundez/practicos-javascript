document.querySelector("button").addEventListener("click", ingresarPuntos);

let totalEquipo1 = 0;
let totalEquipo2 = 0;
let boton = document.querySelector("button");

function ingresarPuntos() {
  const puntosEquipo1 = Number(document.querySelector("#puntosEquipo1").value);
  const puntosEquipo2 = Number(document.querySelector("#puntosEquipo2").value);

  totalEquipo1 += puntosEquipo1;
  totalEquipo2 += puntosEquipo2;

  mensaje = "Puntaje ingresado..."

  if (totalEquipo1 >= 30 || totalEquipo2 >= 30) {
    boton.disabled = true;
    if (totalEquipo1 === totalEquipo2) {
      mensaje = `
            ¡Hubo empate!<br>
            Puntaje: ${totalEquipo1}
            `;
    } else if (totalEquipo1 > totalEquipo2) {
      mensaje = `
            ¡Ganó el equipo 1!<br>
            Puntaje equipo 1: ${totalEquipo1}<br>
            Puntaje equipo 2: ${totalEquipo2}
            `;
    } else {
      mensaje = `
            ¡Ganó el equipo 2!<br>
            Puntaje equipo 1: ${totalEquipo1}<br>
            Puntaje equipo 2: ${totalEquipo2}
            `;
    }
  }
  document.querySelector("p").innerHTML = mensaje;
  document.querySelector("#puntosEquipo1").value = "";
  document.querySelector("#puntosEquipo2").value = "";
}
