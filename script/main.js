let usuario = {
    nombre: prompt("Ingrese su nombre de usuario").toUpperCase(),
    contraseña: prompt("Ingrese su contraseña"),
    saldo: 100,
    donas: [],
};

function ingresarUsuario() {
    if (usuario.nombre && usuario.contraseña) {
        alert(`Bienvenido ${usuario.nombre}. Su saldo actual es: ${usuario.saldo}`);
    } else {
        alert("Usuario o contraseña no válidos");
    }
}

ingresarUsuario();

let comprarDonas = prompt("¿Desea comprar donas? (Responda 'si' o 'no')").toUpperCase();

function comprarDonasSaldo() {
    if (comprarDonas === "SI") {
        let cantidadDeDonas = parseInt(prompt("¿Cuántas donas desea comprar?"));

        if (!isNaN(cantidadDeDonas) && cantidadDeDonas > 0) {
            let tipoDeDona = prompt("¿Qué tipo de dona desea comprar? (Ejemplo: glaseada, chocolate, fresa)");

            realizarCompraDonas(cantidadDeDonas, tipoDeDona);
        } else {
            alert("La cantidad ingresada no es válida");
        }
    } else {
        alert("Gracias por su tiempo. No ha realizado ninguna compra de donas.");
    }
}

function realizarCompraDonas(cantidad, tipo) {
    let costoPorDona = 2; // Precio por dona
    let costoTotal = cantidad * costoPorDona;

    alert(`El costo total de ${cantidad} donas ${tipo} es: ${costoTotal}`);

    if (costoTotal <= usuario.saldo) {
        usuario.saldo -= costoTotal;
        usuario.donas.push({ cantidad, tipo });
        alert(`Compra exitosa. Su saldo actual es: ${usuario.saldo}`);
    } else {
        alert("Su saldo no es suficiente para la compra de donas.");
    }
}

comprarDonasSaldo();

function consultarSaldosYDonas() {
    let consultarDonas = prompt('¿Desea consultar sus donas compradas? (Responda "si" o "no")').toUpperCase();

    if (consultarDonas === "SI") {
        console.log(usuario.donas);
    } else {
        alert("Gracias, vuelva pronto");
    }
}

consultarSaldosYDonas();