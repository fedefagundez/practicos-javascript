document.querySelector("button").addEventListener("click", () => {
  const nombre = document.querySelector("#nombre").value;
  const apellido = document.querySelector("#apellido").value;

  document.querySelector("p").innerHTML = `${apellido}, ${nombre}`;
});
