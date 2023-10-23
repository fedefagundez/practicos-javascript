const peliculas = [
  {
    nombre: "Batman",
    anio: "1989",
    cantVotantes: 3,
    votos: 12,
  },
  {
    nombre: "El Padrino",
    anio: "1972",
    cantVotantes: 5,
    votos: 38,
  },
  {
    nombre: "El Señor de los Anillos",
    anio: "2001",
    cantVotantes: 7,
    votos: 54,
  },
  {
    nombre: "Star Wars",
    anio: "1977",
    cantVotantes: 4,
    votos: 32,
  },
  {
    nombre: "Jurassic Park",
    anio: "1993",
    cantVotantes: 6,
    votos: 46,
  },
  {
    nombre: "Titanic",
    anio: "1997",
    cantVotantes: 8,
    votos: 58,
  },
];

class Pelicula {
  constructor(nombre, anio, votos, cantVotantes) {
    this.nombre = nombre;
    this.anio = anio;
    this.votos = votos;
    this.cantVotantes = cantVotantes;
  }

  validarPelicula() {
    let validar = false;
    if (!isNaN(this.anio) && noExisteRegistro(this.nombre)) {
      validar = true;
    }
    return validar;
  }
}

document
  .getElementById("btnAgregarPelicula")
  .addEventListener("click", agregarPelicula);

function agregarPelicula() {
  const nombre = document.getElementById("txtNombre").value;
  const anio = document.getElementById("txtAnio").value;
  const cantVotantes = document.getElementById("txtCantVotantes").value;
  const votos = document.getElementById("txtVotos").value;

  const pelicula = new Pelicula(nombre, anio, cantVotantes, votos);

  document.getElementById("pMensajes").innerHTML = "";
  if (pelicula.validarPelicula()) {
    peliculas.push(pelicula);
  } else {
    document.getElementById(
      "pMensajes"
    ).innerHTML = `Le pelicula ya se encuentra en el regsitro o el año no es un valor numérico`;
  }
  reiniciarCampos();
}

document
  .getElementById("btnMostrarTabla")
  .addEventListener("click", mostrarTabla);

function mostrarTabla() {
  let contenido = `<h2>Películas</h2>`;
  contenido += `<table border="1">`;
  contenido += "<thead>";
  contenido += "<tr>";
  contenido += "<th>Nombre</th>";
  contenido += "<th>Año</th>";
  contenido += "<th>Cantidad de votantes</th>";
  contenido += "<th>Votos</th>";
  contenido += "<th>Promedio</th>";
  contenido += "</tr>";
  contenido += "</thead>";
  contenido += "<tbody>";

  for (let i = 0; i < peliculas.length; i++) {
    if (peliculas[i].votos / peliculas[i].cantVotantes >= 4) {
      contenido += "<tr>";
      contenido += `<td>${peliculas[i].nombre}</td>`;
      contenido += `<td>${peliculas[i].anio}</td>`;
      contenido += `<td>${peliculas[i].cantVotantes}</td>`;
      contenido += `<td>${peliculas[i].votos}</td>`;
      contenido += `<td>${Math.round(
        peliculas[i].votos / peliculas[i].cantVotantes
      )}</td>`;
      contenido += "</tr>";
    }
  }

  contenido += "</tbody>";
  contenido += "</table>";

  document.getElementById("pMensajes").innerHTML = contenido;
}

document
  .getElementById("btnVerPelicula")
  .addEventListener("click", verPelicula);

function verPelicula() {
  const nombre = document.getElementById("txtVerPelicula").value.toUpperCase();
  let pelicula = {};
  let contenido = "";

  for (let i = 0; i < peliculas.length; i++) {
    if (nombre === peliculas[i].nombre.toUpperCase()) {
      pelicula = peliculas[i];
    }
  }
  contenido = `<strong>${pelicula.nombre}</strong>`;
  contenido += `<ul>`;
  contenido += `<li>Año: ${pelicula.anio}</li>`;
  contenido += `<li>Cantidad de votos: ${pelicula.cantVotantes}</li>`;
  contenido += `<li>Promedio: ${Math.round(
    pelicula.votos / pelicula.cantVotantes
  )}</li>`;
  contenido += `</ul>`;

  document.getElementById("pMensajes").innerHTML = contenido;
  document.getElementById("txtVerPelicula").value = "";
}

/**
 * Reinicia los campos del formulario.
 */
function reiniciarCampos() {
  document.getElementById("txtNombre").value = "";
  document.getElementById("txtAnio").value = "";
  document.getElementById("txtCantVotantes").value = "";
  document.getElementById("txtVotos").value = "";
}

/**
 *
 * @param {String} nombrePelicula
 * @returns {Boolean} Si no existe registro de la pelicula retorna true,
 * de otra forma retorna false.
 */
function noExisteRegistro(nombrePelicula) {
  let retorno = true;
  for (let i = 0; i < peliculas.length; i++) {
    if (nombrePelicula.toUpperCase() === peliculas[i].nombre.toUpperCase()) {
      retorno = false;
    }
  }
  return retorno;
}
