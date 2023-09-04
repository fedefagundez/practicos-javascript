document.querySelector("button").addEventListener("click", esVocal);

function esVocal() {
  let letra = document.querySelector("#letra").value;
  let mensaje = "Nó";

  letra = letra.toLowerCase();

  if (
    letra === "a" ||
    letra === "e" ||
    letra === "i" ||
    letra === "o" ||
    letra === "u"
  ) {
    mensaje = "Sí";
  }

  document.querySelector("p").innerHTML = mensaje;
}
