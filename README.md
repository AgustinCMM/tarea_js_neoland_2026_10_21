# Práctica de lógica con JavaScript

Entorno web local para trabajar seis ejercicios seleccionados de retosdeprogramacion.com. Las páginas incluyen las consignas y una base vacía; ninguna solución está implementada.

## Tecnologías y uso

El proyecto usa HTML5, CSS3 y JavaScript vanilla. No requiere instalar paquetes ni levantar un backend. Abre `index.html` en un navegador moderno y elige un ejercicio del índice o la navegación superior. Si la seguridad del navegador limita alguna función al abrir archivos locales, puedes servir esta carpeta con cualquier servidor estático local, sin añadir dependencias al proyecto.

## Ejercicios

- 1 — EL FAMOSO "FIZZ BUZZ"
- 3 — LA SUCESIÓN DE FIBONACCI
- 6 — ASPECT RATIO DE UNA IMAGEN
- 16 — ¿CUÁNTOS DÍAS?
- 19 — TRES EN RAYA
- 20 — CONVERSOR TIEMPO

## Estructura y responsabilidades

- `index.html`: índice, tarjetas y navegación general.
- `assets/css/styles.css`: variables, componentes y diseño compartido responsive.
- `assets/js/main.js`: punto de entrada general; los enlaces se declaran en HTML.
- `ejercicios/ejercicio-NN/index.html`: consigna, área de trabajo y resultados.
- `ejercicios/ejercicio-NN/css/styles.css`: estilos particulares, inicialmente vacío.
- `ejercicios/ejercicio-NN/js/script.js`: archivo independiente para implementar la solución.
- `consignas.txt`: fuente original, conservada sin modificaciones.

Para resolver un ejercicio, edita únicamente su `js/script.js` y, si hace falta mostrar una salida, usa el área de resultados preparada en su HTML. Los ejercicios cuya consigna pide salida por consola muestran “(ver en consola)”. Abre las herramientas de desarrollador del navegador y selecciona la pestaña Consola para consultar esa salida.

Los scripts de ejercicio se cargan al final del `body` y son independientes. El proyecto no usa frameworks, bibliotecas externas, gestores de paquetes, compilación, base de datos ni backend.
