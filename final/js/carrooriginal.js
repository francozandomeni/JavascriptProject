let carritoProductos = localStorage.getItem("productos-seleccionados");
const carritoVacio = document.querySelector("#carro-vacio");
const productosContainer = document.querySelector("#productos-carrito");
const opcionesCarrito = document.querySelector("#opciones-carrito");
const carritoComprado = document.querySelector("#carrito-comprado");
const vaciarBoton = document.querySelector("#vaciar")
let eliminarBoton = document.querySelectorAll(".eliminar-producto-carrito");
const totalContainer = document.querySelector("#total");
let botonCompra = document.querySelector("#boton-carrito-comprar")

carritoProductos = JSON.parse(carritoProductos);

function botonesEliminar() {
    eliminarBoton = document.querySelectorAll(".eliminar-producto-carrito")

    eliminarBoton.forEach(boton => {
        boton.addEventListener("click", borrarDelCarrito);


    });
 }

 function cargarProductosCarro() {

    if(carritoProductos && carritoProductos.length > 0) {

        

        carritoVacio.classList.add("disabled");
        productosContainer.classList.remove("disabled");
        opcionesCarrito.classList.remove("disabled");
        carritoComprado.classList.add("disabled");
        
    
        productosContainer.innerHTML = "";
    
    
        carritoProductos.forEach(productos => {
    
            const div = document.createElement("div");
                div.classList.add("producto-carrito");
                div.innerHTML = `
                    <img class="imagen-producto-carro" src="${productos.imagen}" alt="${productos.titulo}">
                    <div class="informacion-producto-carrito">
                        <small>Titulo</small>
                        <h3>${productos.titulo}</h3>
                    </div>
                    <div class="cantidad-producto-carrito">
                        
                        <p><small>${productos.cantidad}</small></p>
                    </div>
                    <div class="precio-producto-carrito">
                        <small>Precio</small>
                        <p>$${productos.precio}</p>
                    </div>
                    <div class="subtotal-producto-carrito">
                        
                        <p><small>$${productos.precio * productos.cantidad}</small></p>
                    </div>
                    <button class="eliminar-producto-carrito" id="${productos.id}" ><i class="bi bi-trash"></i></button>`
    
    
                    productosContainer.append(div);
                })
    
    } else {
    
        carritoVacio.classList.remove("disabled");
        productosContainer.classList.add("disabled");
        opcionesCarrito.classList.add("disabled");
        carritoComprado.classList.add("disabled");
    
    
    }

    
    botonesEliminar();
    totalContainer.innerText = `$ ` + actualizarPrecio();
 }

 cargarProductosCarro();


function borrarDelCarrito(e) {

    const botonId = e.currentTarget.id;
    const index = carritoProductos.findIndex(producto => producto.id === botonId);

    carritoProductos.splice(index, 1);
    cargarProductosCarro();

    localStorage.setItem("productos-seleccionados", JSON.stringify(carritoProductos))
}

vaciarBoton.addEventListener("click", vaciarCarro);
function vaciarCarro() {
    
    carritoProductos.length = 0;
    localStorage.setItem("productos-seleccionados", JSON.stringify(carritoProductos));
    cargarProductosCarro();

}

function actualizarPrecio() {

    let total = 0;
    carritoProductos.forEach(producto => total = total + producto.precio)
    return total



}

botonCompra.addEventListener("click", comprar);
function comprar() {
    carritoProductos.length = 0;
    localStorage.setItem("productos-seleccionados", JSON.stringify(carritoProductos));

        carritoVacio.classList.add("disabled");
        productosContainer.classList.add("disabled");
        opcionesCarrito.classList.add("disabled");
        carritoComprado.classList.remove("disabled");

        botonCompra.innerText = `Muchas gracias por su compra!`
}

