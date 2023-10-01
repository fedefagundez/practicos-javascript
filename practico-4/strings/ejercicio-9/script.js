document
  .querySelector("#btnBoton")
  .addEventListener("click", validarContraseña);

function validarContraseña() {
  const contraseña = document.querySelector("#txtContraseña").value;
  let tieneErrores = false;
  let parrafo = document.querySelector("#pMensajes");
  let mensaje = "";
  let cantMayusculas = 0;
  let cantMinusculas = 0;
  let cantNumeros = 0;
  let cantOtrosCaracteres = 0;

  parrafo.innerHTML = `<ul id="ulLista"></ul>`;

  // Valida largo de la contraseña
  if (contraseña.length < 5) {
    tieneErrores = true;
    mensaje += "<li>Debe tener 5 caracteres como mínimo.</li>";
  }

  // Validar que no comience con un número
  if (!isNaN(contraseña.charAt(0))) {
    tieneErrores = true;
    mensaje += "<li>No debe comenzar con un número.</li>";
  }

  // Validar que no tenga espacios
  if (contraseña.includes(" ")) {
    tieneErrores = true;
    mensaje += "<li>No debe contener espacios</li>";
  }
  // Contar distintos caracteres
  for (let i = 0; i < contraseña.length; i++) {
    // Contar números
    if (i > 0 && !isNaN(contraseña.charAt(i))) {
      cantNumeros++;
    }

    // Contar mayúsculas
    if (contraseña.charCodeAt(i) >= 65 && contraseña.charCodeAt(i) <= 90) {
      cantMayusculas++;
    }

    // Contar minúsculas
    if (contraseña.charCodeAt(i) >= 97 && contraseña.charCodeAt(i) <= 122) {
      cantMinusculas++;
    }

    switch (contraseña.charCodeAt(i)) {
      case 46:
        cantOtrosCaracteres++;
        break;
      case 64:
        cantOtrosCaracteres++;
        break;
      case 35:
        cantOtrosCaracteres++;
        break;
      case 33:
        cantOtrosCaracteres++;
        break;
    }
  }
  if (cantMayusculas === 0) {
    tieneErrores = true;
    mensaje += "<li>Debe tener al menos una mayúscula.</li>";
  }

  if (cantMinusculas === 0) {
    tieneErrores = true;
    mensaje += "<li>Debe tener al menos una minúscula.</li>";
  }
  if (cantNumeros === 0) {
    tieneErrores = true;
    mensaje += "<li>Debe tener al menos un número.</li>";
  }

  if (cantOtrosCaracteres === 0) {
    tieneErrores = true;
    mensaje += `<li>Debe tener al menos un de estos carácteres: ".", "@", "#" ó "!" </li>`;
  }

  if (!tieneErrores) {
    parrafo.innerHTML = `La contraseña es: ${contraseña}`;
  } else {
    document.querySelector("#ulLista").innerHTML = mensaje;
  }
}
