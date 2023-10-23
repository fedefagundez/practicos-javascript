class Usuario {
  constructor(nombre, edad, nacionalidad) {
    this.nombre = nombre;
    this.edad = edad;
    this.nacionalidad = nacionalidad;
  }
}

let usuarios = [];

document.querySelector("#btnCrearUsuario").addEventListener("click", ingresarUsuario);

function ingresarUsuario() {
  const nombre = document.getElementById("txtNombre").value;
  const edad = Number(document.getElementById("txtEdad").value);
  const nacionalidad = document.getElementById("txtNacionalidad").value;

  usuarios.push(new Usuario(nombre, edad, nacionalidad));

  console.log(usuarios);

  document.getElementById("txtNombre").value = "";
  document.getElementById("txtEdad").value = "";
  document.getElementById("txtNacionalidad").value = "";
}

document
  .getElementById("btnTablaUsuarios")
  .addEventListener("click", verUsuarios);

function verUsuarios() {
  let contenido = "<h2>Usuarios</h2>";

  contenido += `<table border="1">`;
  contenido += "<thead>";
  contenido += "<tr>";
  contenido += "<th>Nombre</th>";
  contenido += "<th>Edad</th>";
  contenido += "<th>Nacionalidad</th>";
  contenido += "</tr>";
  contenido += "</thead>";
  contenido += "<tbody>";

  for (let i = 0; i < usuarios.length; i++) {
    contenido += `<td>${usuarios[i].nombre}</td>`;
    contenido += `<td>${usuarios[i].edad}</td>`;
    contenido += `<td>${usuarios[i].nacionalidad}</td>`;
  }

  contenido += "</tbody>";
  contenido += "</table>";

  document.getElementById("pUsuarios").innerHTML = contenido;
}

document
  .getElementById("btnTablaUsuariosEdad")
  .addEventListener("click", verUsuariosMayores);

function verUsuariosMayores() {
  let contenido = "<h2>Usuarios mayores de edad</h2>";

  contenido += `<table border="1">`;
  contenido += "<thead>";
  contenido += "<tr>";
  contenido += "<th>Nombre</th>";
  contenido += "<th>Edad</th>";
  contenido += "<th>Nacionalidad</th>";
  contenido += "</tr>";
  contenido += "</thead>";
  contenido += "<tbody>";

  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].edad >= 18) {
      contenido += `<td>${usuarios[i].nombre}</td>`;
      contenido += `<td>${usuarios[i].edad}</td>`;
      contenido += `<td>${usuarios[i].nacionalidad}</td>`;
    }
  }

  contenido += "</tbody>";
  contenido += "</table>";

  document.getElementById("pUsuariosMayores").innerHTML = contenido;
}
