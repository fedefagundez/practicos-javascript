document.querySelector("button").addEventListener("click", () => {
  const radio = document.querySelector("#radio").value;

  console.log(radio);

  document.querySelector("p").innerHTML = `El área de la circunferencia es ${(
    Math.PI *
    radio *
    radio
  ).toFixed(2)} y el perímetro ${(2 * Math.PI * radio).toFixed(2)}`;
});
