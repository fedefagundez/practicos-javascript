document.querySelector("button").addEventListener("click", () => {
  const nroChirridos = document.querySelector("#nroChirridos").value;
  let temperaturaFahrenheit;
  let temperaturaCelsius;
  let temperaturaCelsiusDirecto;

  temperaturaFahrenheit = 50 + (nroChirridos - 40) / 4;
  temperaturaCelsius = (temperaturaFahrenheit - 32) / 1.8;
  temperaturaCelsiusDirecto = 10 + (nroChirridos - 40) / 7;

  document.querySelector(
    "#p1"
  ).innerHTML = `Cálculo directo: ${temperaturaCelsiusDirecto}ºC`;
  document.querySelector(
    "#p2"
  ).innerHTML = `Cálculo indirecto: ${temperaturaCelsius}ºC`;
});
