document.querySelector("button").addEventListener("click", calcularPrecio);

function calcularPrecio() {
  const totalEntradas = document.querySelector("#totalEntradas").value;
  const cantEntradas = document.querySelector("#cantEntradas").value;
  const tipoFuncion = document.querySelector("#tipoFuncion").value;
  const franjaHoraria = document.querySelector("#fnjaHoraria").value;
  let existeErrores = false;
  let mensaje = "";
  const p = document.querySelector("p");
  let precioPorEntrada = 80;
  let precioTotal = 0;

  p.innerHTML = "";

  // Validación
  if (
    totalEntradas === "" ||
    cantEntradas === "" ||
    tipoFuncion === "-1" ||
    franjaHoraria === "-1"
  ) {
    mensaje = "➡ Todos los campos son obligatorios.<br>";
    existeErrores = true;
  }
  if (isNaN(totalEntradas)) {
    mensaje += "➡ El total de entradas debe ser un número.<br>";
    existeErrores = true;
  }
  if (isNaN(cantEntradas)) {
    mensaje += "➡ La cantidad de entradas debe ser un número.";
    existeErrores = true;
  }
  if (cantEntradas > totalEntradas) {
    mensaje += "➡ No hay entradas suficientes.";
    existeErrores = true;
  }

  if (!existeErrores) {
    // Precio según tipo de función
    if (tipoFuncion === "3d") {
      precioPorEntrada = precioPorEntrada + 20;
    } else if (tipoFuncion === "4d") {
      precioPorEntrada = precioPorEntrada + 60;
    }

    // Precio según franja horaria
    if (franjaHoraria === "tarde") {
      precioPorEntrada = precioPorEntrada * 1.1;
    } else if (franjaHoraria === "noche") {
      precioPorEntrada = precioPorEntrada * 1.22;
    }
    precioTotal = precioPorEntrada * cantEntradas;
    mensaje = `El precio por ${cantEntradas} entradas es <b>$${precioTotal.toFixed(2)}</b>`;

    document.querySelector("#totalEntradas").value = "";
    document.querySelector("#cantEntradas").value = "";
    document.querySelector("#tipoFuncion").value = "-1";
    document.querySelector("#fnjaHoraria").value = "-1";
  }

  p.innerHTML = mensaje;
}
