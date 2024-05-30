class cart {
    constructor(zapas) {
        this.zapas = zapas
    }
    subtotal() {
        if (this.zapas.length > 0) {
            return this.zapas.reduce((acc, zapatilla)=> {
                return acc + zapatilla.precio}, 0)
        } else {
            return "Error"
        }
        
    }
    confirmarCompra() {
        if (this.subtotal() !== 'Error') {
        return `Confirmamos el pago de $ ${this.subtotal()}. Muchas gracias por tu compra <3.`
        } else {
            return `Error en el pago.`
        }
    }
}