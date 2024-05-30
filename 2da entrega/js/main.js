const mensajeConsulta = "Ingrese el número del codigo de la zapatilla para agregar a la bolsa:"

const bolsa = []

const zapas = 
            [{nombre: "Nike Precision 5", imagen:'/imagenes/nike precision 5.jpg', code: 1, talle: "Del 10 al 15 us", precio: 47000},
            {nombre: "Nike Kyrie Low 5", imagen:'/imagenes/kyrie low 5.jpg', code: 2, talle: "Del 10 al 15 us", precio: 52000},
            {nombre: "Nike Giannis Immortality 2", imagen:'/imagenes/nike inmortality giannis.jpg', code: 3, talle: "Del 8 al 13 us", precio: 45000},
            {nombre: "Nike Lebron Witness 7", imagen: '/imagenes/lebron witness.jpg', code: 4, talle: "Del 10 al 15 us", precio: 51000},
            {nombre: "Nike Renew Elevate 3", imagen: '/imagenes/renew elevate.jpg', code: 5, talle: "Del 8 al 13 us", precio: 58000},
            {nombre: "Nike GT Cut 2", imagen:'/imagenes/nike gt cut.jpg.jpg', code: 6, talle: "Del 10 al 15 us", precio: 50000},
            {nombre: "Under Armour Spawn 3 Black Beta", imagen:'/imagenes/under armour.jpg', code: 7, talle:"Del 8 al 13 us", precio: 61000},
            {nombre: " Nike LeBron XX", imagen:'/imagenes/lebron xx.jpg', code: 8, talle:"Del 10 al 15 us", precio: 70000}]


function seleccionarZapa(code) {
    let resultado = zapas.find((zapa) => zapa.code === parseInt(code));
    return resultado;

}

function chequearBolsa() {
    console.table(bolsa)
}

function aceptarCompra() {
    if (bolsa.length > 0) {
        const shop = new cart(bolsa)
        alert(`El costo de tu compra es de $ ${shop.subtotal()}.`)
        let confirmacion = confirm(`Deseas realizar el pago ?`)
        if (confirmacion) {
            alert(shop.confirmarCompra())
            bolsa.length = 0

        }
    } else {
        console.warn(`No hay productos en la bolsa.`)
    }
}

function compra()  {
    let code = parseInt(prompt(mensajeConsulta))
        if (code === undefined && !parseInt) {
            alert(`Error en el dato ingresado.`)
            let devolucion = confirm(`Queres intentar nuevamente?`)
            if (devolucion) {
                compra()
            } 
            return
        } else {
            let codigoSeleccionado = seleccionarZapa(code)
                if (codigoSeleccionado !== undefined){
                alert(`La prenda ${codigoSeleccionado.nombre} se agrego a la bolsa.`)
                bolsa.push(codigoSeleccionado)
                let devolucion = confirm(`Deseas llevar otra prenda?`)
                    if (devolucion) {
                        compra()
                    } else {
                        aceptarCompra()
                    }   
                }
            }
}

// function tarjetaCredito(1.2) {
//     return (subtotal()) 

     
// }
