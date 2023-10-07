document.querySelector("#btnBoton").addEventListener("click", mostrarSueldo);

function mostrarSueldo() {
  const sueldoNominal = document.querySelector("#txtSueldo").value;
  const fonasa = Number(document.querySelector("#slctFonasa").value);

  document.querySelector("#pMostrar").innerHTML = `Salario líquido a cobrar: $${
    Math.round(calcularSueldoLiquido(sueldoNominal, fonasa) * 100) / 100
  }`;
}

function calcularSueldoLiquido(s, fonasa) {
  let sueldoLiquido = 0;
  const BPS = 0.15;
  const FRL = 0.001;

  return (sueldoLiquido = s * (1 - BPS - FRL - fonasa));
}
