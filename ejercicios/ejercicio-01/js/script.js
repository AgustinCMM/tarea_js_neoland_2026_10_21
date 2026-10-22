"use strict";

// Ejercicio pendiente de resolución.
// Implementar aquí la lógica del ejercicio.

for (let i=1; i <= 100; i++) {
    let p = "";
    if (i%3 == 0) {
        p += "fizz";
    }    
    if (i%5 == 0) {
        p += "buzz";
    }
    if (p != "") {
        console.log(p);
    } else {
        console.log(i);
    }
}