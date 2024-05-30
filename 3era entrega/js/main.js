// PRODUCTOS
const productos = [
  
    {
        id: "zapatilla1",
        titulo: "kyrie low 5.",
        imagen: "./imagenes/kyrie low 5.jpg",
        categoria: {nombre: "Zapatillas",
                    id: "zapatillas" 
                },
        precio: 55000
    },

    {
        id: "zapatilla2",
        titulo: "lebron witness",
        imagen: "./imagenes/lebron witness.jpg",
        categoria: {nombre: "Zapatillas",
                    id: "zapatillas" 
                },
        precio: 65000
    },
    {
        id: "zapatilla3",
        titulo: "lebron xx",
        imagen: "./imagenes/lebron xx.jpg",
        categoria: {nombre: "Zapatillas",
                    id: "zapatillas" 
                },
        precio: 75000
    },
    {
        id: "zapatilla4",
        titulo: "nike gt cut",
        imagen: "./imagenes/nike gt cut.jpg",
        categoria: {nombre: "Zapatillas",
                    id: "zapatillas" 
                },
        precio: 45000
    },
    {
        id: "zapatilla5",
        titulo: "Nike inmortality giannis",
        imagen: "./imagenes/nike inmortality giannis.jpg",
        categoria: {nombre: "Zapatillas",
                    id: "zapatillas" 
                },
        precio: 47000
    },
    {
        id: "media1",
        titulo: "Media Nike Blanca Elite NBA",
        imagen: "./imagenes/media1.jpg",
        categoria: {nombre: "Medias",
                    id: "medias" 
                },
        precio: 5000
    },
    {
        id: "media2",
        titulo: "Media Nike Negra Elite NBA",
        imagen: "./imagenes/media3.jpg",
        categoria: {nombre: "Medias",
                    id: "medias" 
                },
        precio: 5000
    },
    {
        id: "media3",
        titulo: "Media Stance Blanca NBA",
        imagen: "./imagenes/media4.jpg",
        categoria: {nombre: "Medias",
                    id: "medias" 
                },
        precio: 6000
    },
    {
        id: "media4",
        titulo: "Media Nike Elite Blanca",
        imagen: "./imagenes/media5.jpg",
        categoria: {nombre: "Medias",
                    id: "medias" 
                },
        precio: 7000}
    
];



const wrapperProductos = document.querySelector("#contenedor-todos-productos")
const botonesSecciones = document.querySelectorAll(".boton-secciones")
let agregarAlCarrito = document.querySelectorAll(".agregar-producto")

function cargarProductos(productosSeleccionados) {

    wrapperProductos.innerHTML = "";

    productosSeleccionados.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("contenedor-productos");
        div.innerHTML = `
        <img class="imagen-pruducto" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="descripcion-producto">
            <h3 class="titulo-producto">${producto.titulo}</h3>
            <p class="precio-producto">$${producto.precio}</p>
            <button class="agregar-producto" id="${producto.id}">Agregar al carrito</button>
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
            const botonProductos = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(botonProductos);   
        } else {
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

const carritoProductos = []

function agregarFinal(e) {
    const botonId =  e.currentTarget.id;
    const productosAgregados = productos.find(producto => producto.id === botonId);

    if(carritoProductos.some(producto => producto.id === botonId)){
        

    } else {
        carritoProductos.push(productosAgregados)
}
    
    localStorage.setItem("productos-seleccionados", JSON.stringify(carritoProductos))

}