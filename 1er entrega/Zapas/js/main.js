
const mensajeConsulta = "Ingrese el número de la zapatilla para saber el precio: \n" +
                       "1) Nike Precision 5 \n" +
                       "2) Nike Kyrie Low 5 \n" +
                       "3) Nike Giannis Immortality 2 \n" +
                       "4) Nike Lebron Witness 7 \n" +
                       "5) Nike Renew Elevate 3 \n"




// function bienvenida() {
//     mensajeBienvenida = parseInt(prompt("Bienvenido! Queres saber los precios de nuestro catalogo?  \n" +
//                                         "Elija un numero para la opcion que desee.  \n" +
//                                         "1) Si \n" +
//                                         "2) No "))

//     if (mensajeBienvenida >= 2) {
//         alert("Gracias por su visita! Vuelva pronto.")

//     } else {
//         iniciarConsulta()
//     }
    
    
// }


function iniciarConsulta() {


    let elegirProducto = parseInt(prompt(mensajeConsulta).trim())
    
    if (elegirProducto !== 1 && elegirProducto !== 2 && elegirProducto !== 3 & elegirProducto !== 4 && elegirProducto !== 5) {
        alert("Por favor, ingresar un codigo numérico valido.") 
        iniciarConsulta()
       

    } else {
        switch(elegirProducto) {
            case 1:
                alert("Nike Precision 5: $47.000")
                break
            case 2:
                alert("Nike Kyrie Low 5: $52.000")
                break
            case 3:
                alert("Nike Giannis Immortality 2: $45.000")
                break
            case 4:
                alert("Nike Lebron Witness 7: $62.000")
                break
            case 5:
                alert("Nike Renew Elevate 3 $58.000")
                break
            default: 
                console.error("Algo se rompió. Nuestro equipo de programadores se está encargando de solucionarlo.")
        }
    }
}

let seguirPreguntando = true
while(seguirPreguntando) {
    iniciarConsulta()
    seguirPreguntando = confirm("¿Deseas conocer otro precio?")
}

