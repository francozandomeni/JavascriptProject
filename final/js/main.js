let productos = [];

fetch("../js/productos.json")
    .then(response => response.json())
    .then(data => {
        productos = data;
        cargarProductos(productos);
    })

const wrapperProductos = document.querySelector("#contenedor-todos-productos")
const botonesSecciones = document.querySelectorAll(".boton-secciones")
let agregarAlCarrito = document.querySelectorAll(".agregar-producto")
const numero = document.querySelector("#numero")
const titulo = document.querySelector("#titulo")

function cargarProductos(productosSeleccionados) {

    wrapperProductos.innerHTML = "";

    productosSeleccionados.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("contenedor-productos");
        div.innerHTML = `
        <div class="img"><img class="imagen-pruducto" src="${producto.imagen}" alt="${producto.titulo}"></div>
        <div class="descripcion-producto">
            <h3 class="titulo-producto">${producto.titulo}</h3>
            <p class="precio-producto">$${producto.precio}</p>
            <button class="agregar-producto buttons" id="${producto.id}">Agregar al carrito</button>
        </div>
        `
        wrapperProductos.append(div);
    })

    botonesAgregar();

}

cargarProductos(productos)

botonesSecciones.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesSecciones.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");
        
        

        if (e.currentTarget.id != "todos") {
            const categoriaProducto = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            titulo.innerText = categoriaProducto.categoria.nombre;


            const botonProductos = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(botonProductos);  

        } else {
            titulo.innerText = "Todos los productos";
            cargarProductos(productos)
        }
    })

})

function botonesAgregar() {
    agregarAlCarrito = document.querySelectorAll(".agregar-producto")

    agregarAlCarrito.forEach( boton => {
        boton.addEventListener("click", agregarFinal)

    });

 }

let carritoProductos;
let carritoProductosLocalS = localStorage.getItem("productos-seleccionados")


if(carritoProductosLocalS) {
    carritoProductos = JSON.parse(carritoProductosLocalS);
    cantidadProductosCarrito();
} else {
    carritoProductos = [];
}

function agregarFinal(e) {


    const botonId =  e.currentTarget.id;
    const productosAgregados = productos.find(producto => producto.id === botonId);

    if(carritoProductos.some(producto => producto.id === botonId)) {
        const index = carritoProductos.findIndex(producto => producto.id === botonId)
        carritoProductos[index].cantidad++; 
        

    } else {
        productosAgregados.cantidad = 1;
        carritoProductos.push(productosAgregados)
}

    cantidadProductosCarrito()

    Swal.fire(
        `Se ha añadido al carrito.`,
        `El producto se ha guardado correctamente.`,
        `success`
      )
    
    localStorage.setItem("productos-seleccionados", JSON.stringify(carritoProductos))
    
}

function cantidadProductosCarrito() {
    let numeroActualizado = carritoProductos.length;
    numero.innerText = numeroActualizado;
}