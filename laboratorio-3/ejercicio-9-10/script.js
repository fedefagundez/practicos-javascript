document.querySelector("button").addEventListener("click", calcularAlquiler);

function calcularAlquiler() {
  const valorCoche = document.querySelector("#valCoche").value;
  const cantDias = document.querySelector("#cantDias").value;
  const tipoArrendatario = document.querySelector("#tipoArrendatario").value;
  let precioBase = valorCoche * 0.05;
  let total;
  let mensaje = "";
  let existenErrores = false;

  document.querySelector("p").innerHTML = "";

  // Validación
  if (valorCoche === "") {
    mensaje = "➡ No ingresó el valor del coche.<br>";
    existenErrores = true;
  }
  if (cantDias === "") {
    mensaje += "➡ No ingresó la cantidad de días.<br>";
    existenErrores = true;
  }
  if (tipoArrendatario === "-1") {
    mensaje += "➡ No ingresó el tipo de arrendatario.<br>";
    existenErrores = true;
  }
  if (isNaN(valorCoche)) {
    mensaje += "➡ El valor del coche debe ser un número.<br>";
    existenErrores = true;
  }
  if (isNaN(cantDias)) {
    mensaje += "➡ La cantidad de días debe ser un número.<br>";
    existenErrores = true;
  }
  if (Number(valorCoche) < 9000 && valorCoche !== "") {
    mensaje += "➡ El valor del coche debe superior a US$9000.<br>";
    existenErrores = true;
  }

  // Cálculos

  if (!existenErrores) {
    if (cantDias >= 30) {
      precioBase = precioBase * 0.8;
    } else if (10 >= cantDias && cantDias < 30) {
      precioBase = precioBase * 0.9;
    } else if (5 >= cantDias && cantDias < 10) {
      precioBase = precioBase * 0.95;
    }

    if (tipoArrendatario === "cliente" || tipoArrendatario === "empleado") {
      total = precioBase * cantDias - 20 * cantDias;
    }

    mensaje = `El precio por ${cantDias} días es $${total.toFixed(2)}.`;
  }

  document.querySelector("p").innerHTML = mensaje;

  document.querySelector("#valCoche").value = "";
  document.querySelector("#cantDias").value = "";
  document.querySelector("#tipoArrendatario").value = "-1";
}
