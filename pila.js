let pila = [];

function push(nombre, edad) {
    let objeto = {
        Nombre: nombre,
        Edad: edad
    };

    pila.push(objeto);
    console.log("Agregado:", objeto);
}

function pop() {
    if (pila.length === 0) {
        console.log("Pila vacía");
        return;
    }

    let eliminado = pila.pop();
    console.log("Eliminado:", eliminado);
}

push("Orlando", 30);
push("Ana", 25);
pop();

console.log("Pila actual:", pila);