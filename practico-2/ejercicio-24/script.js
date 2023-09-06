let totalSueldos = 0;
let sueldoMinimo = 0;
let cont = 0;

document.querySelector("button").addEventListener("click", procesar);

function procesar() {
  const sueldo = Number(document.querySelector("#sueldo").value);

  if (cont === 0) {
    sueldoMinimo = sueldo;
    primerSueldoIngresado = false;
  }

  if (sueldoMinimo > sueldo) {
    sueldoMinimo = sueldo;
  }

  totalSueldos += sueldo;

  cont++;

  document.querySelector("p").innerHTML = `
    Total de sueldos: ${totalSueldos}<br>
    Total de empleados: ${cont}<br>
    Sueldo más bajo: ${sueldoMinimo} 
    `;

  document.querySelector("#sueldo").value = "";
}
