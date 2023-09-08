document.querySelector("button").addEventListener("click", procesar);

let stock = 0;
let parrafo = document.querySelector("p");
let cantidadPedidos = 0;

function procesar() {
    const stockAuxiliar = document.querySelector("#stock").value;
    const nombreCliente = document.querySelector("#nombreCliente").value;
    const cantidadPiezas = document.querySelector("#cantPiezas").value;
    let pedidoMaximo = 0;
    let nombreDelClientePedidoMaximo = "";
    let mensaje = "";

    if(stock === 0){
        stock = stockAuxiliar;
        mensaje = "Comience a ingresar los pedidos..."
    } else {
        if(cantidadPiezas <= stock){
            stock -= cantidadPiezas;
            cantidadPedidos++;
            document.querySelector("#stock").value = stock;
            mensaje = "Operación realizada con éxito."
        } else {
            mensaje = "El stock no es suficiente."
        }
    
        if(cantidadPiezas >= pedidoMaximo){
            pedidoMaximo = cantidadPiezas;
            if(stock !== 0){
                nombreDelClientePedidoMaximo += `${nombreCliente}, `;
            } else {
                nombreDelClientePedidoMaximo += nombreCliente;
            }
            
        }

        if(stock === 0){
            document.querySelector("button").disabled = true;
            mensaje = `
            Cantidad de pedidos: ${cantidadPedidos}<br>
            Cliente con el mayor pedido: ${nombreDelClientePedidoMaximo}
            `
        }
    }
    document.querySelector("#nombreCliente").value = "";
    document.querySelector("#cantPiezas").value = "";
    parrafo.innerHTML = mensaje;
    
}