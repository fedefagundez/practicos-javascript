document
  .querySelector("#btnIngresar")
  .addEventListener("click", ingresarUsuario);
const usuarios = [];
let indice = 0;
const parrafo = document.querySelector("#pMostrar");

function ingresarUsuario() {
  const usuario = document.querySelector("#txtUsuario").value;
  if (!usuarioEstaEnArreglo(usuarios, usuario)) {
    usuarios.push(usuario);
    parrafo.innerHTML += `${usuarios[indice]}<br>`;
    indice++;
  }
}

/**
 *
 * @param {Array} arreglo Arreglo de usuarios.
 * @param {String} usuario usuario a buscar.
 * @returns {Boolean} Si el usuario se encuentra en el arreglo devuelve true, de otra forma devuelve false.
 */
function usuarioEstaEnArreglo(usuarios, usuario) {
  let encontrado = false;
  let i = 0;
  while (i < usuarios.length && !encontrado) {
    if (usuarios[i] === usuario) {
      encontrado = true;
    }
    i++;
  }

  return encontrado;
}
