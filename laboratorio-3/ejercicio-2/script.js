document.querySelector('button').addEventListener('click', tramitar);

function tramitar() {
    const nombre = document.querySelector('#nombre').value;
    const edad = document.querySelector('#edad').value;
    let mensaje = '';

    if (Number(edad) < 18) {
        mensaje = `${nombre} aún no puede sacar la libreta de conducir.`
    } else {
        mensaje = `${nombre} puede conducir.`
    }

    document.querySelector('p').innerHTML = mensaje;

    document.querySelector('#nombre').value = '';
    document.querySelector('#edad').value = '';
}