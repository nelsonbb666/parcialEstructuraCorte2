let cola = [];

function agregar(numero) {
    cola.push(numero);
    console.log("Se agregó:", numero);
    console.log("Cola actual:", cola);
}

function eliminar() {
    if (cola.length === 0) {
        console.log("La cola está vacía");
        return;
    }

    let eliminado = cola.shift();
    console.log("Se eliminó:", eliminado);
    console.log("Cola actual:", cola);
}

agregar(10);
agregar(20);
agregar(30);

eliminar();