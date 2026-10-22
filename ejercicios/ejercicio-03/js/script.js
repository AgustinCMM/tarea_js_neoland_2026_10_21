"use strict";

// Ejercicio pendiente de resolución.
// Implementar aquí la lógica del ejercicio.
let numero = 1;
let anterior = 0;

for (let i=1; i<=50; i++) {
    console.log(anterior);
    let siguiente = numero + anterior;
    anterior = numero;
    numero = siguiente;
}