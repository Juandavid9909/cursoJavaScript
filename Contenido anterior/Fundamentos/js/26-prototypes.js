function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

// Crear un Prototype
Cliente.prototype.tipoCliente = function() {
    let tipo;

    if (this.saldo > 1000) {
        tipo = "Gold";
    } else if (this.saldo > 500) {
        tipo = "Platinum";
    } else {
        tipo = "Normal";
    }

    return tipo;
}

// Prototipo que imprime saldo y nombre
Cliente.prototype.nombreClienteSaldo = function() {
    return `Nombre: ${ this.nombre }, tu saldo es de ${ this.saldo }, tipo cliente ${ this.tipoCliente() }`;
}

// Retirar saldo
Cliente.prototype.retirarSaldo = function(retiro) {
    return this.saldo -= retiro;
}

const cliente1 = new Cliente("Pedro", 100);

cliente1.retirarSaldo(300);

console.log(cliente1.nombreClienteSaldo());