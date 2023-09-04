document.querySelector("button").addEventListener("click", sugerir);

function sugerir() {
  const temperatura = document.querySelector("#temp").value;
  const dia = document.querySelector("#dia").value;
  let mensaje = "Levantarse<br>";

  if (temperatura < 10) {
    mensaje += "Abrigarse mucho<br>";
  } else if (20 < temperatura) {
    mensaje += "Ponerse ropa cómoda<br>";
  } else {
    mensaje += "Abrigo moderado<br>";
  }

  if (dia === "X") {
    mensaje += "Ir a trabajar";
  } else {
    mensaje += "Quedarse en casa, hoy no trabaja";
  }

  document.querySelector("p").innerHTML = mensaje;
}
