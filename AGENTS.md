# AGENTS.md — Entorno de ejercicios de lógica con JavaScript

## 1. Objetivo del proyecto

Crear un entorno web local para practicar ejercicios de lógica de programación con JavaScript.

El proyecto contiene seis ejercicios seleccionados de retosdeprogramacion.com. Sus consignas originales están almacenadas en el archivo `consignas.txt`, ubicado en la raíz del proyecto.

El objetivo es proporcionar una estructura organizada, una interfaz visual común y una base funcional para cada ejercicio, de modo que el desarrollador pueda concentrarse exclusivamente en resolverlos.

**Está terminantemente prohibido resolver, completar o implementar la lógica de los ejercicios.**

El agente debe generar únicamente el entorno de trabajo, las estructuras iniciales, las interfaces y los archivos necesarios.

## 2. Tecnologías permitidas

Utilizar exclusivamente:

- HTML5.
- CSS3.
- JavaScript vanilla (ES6+).

No utilizar:

- React, Vue, Angular ni otros frameworks.
- TypeScript.
- Node.js como requisito de ejecución.
- npm, yarn, pnpm ni gestores de paquetes.
- Bootstrap, Tailwind CSS ni otros frameworks de estilos.
- Bibliotecas externas.
- Librerías de iconos externas.
- Servidores backend.
- Bases de datos.
- Herramientas de compilación o transpilación.

El proyecto debe poder utilizarse localmente desde un navegador moderno.

## 3. Análisis previo obligatorio

Antes de modificar o crear archivos:

1. Inspeccionar la estructura existente del proyecto.
2. Leer íntegramente `consignas.txt`.
3. Identificar los seis ejercicios seleccionados.
4. Extraer sus números originales, títulos y consignas completas.
5. Determinar qué ejercicios necesitan mostrar resultados en el HTML y cuáles deben mostrar sus resultados exclusivamente en la consola.
6. Conservar exactamente la numeración original de los ejercicios.
7. No renumerar los ejercicios de forma consecutiva si faltan números intermedios.
8. No inventar, resumir ni modificar las consignas originales.

Si las consignas no están disponibles, son ilegibles o no permiten identificar inequívocamente los ejercicios, solicitar aclaraciones antes de generar las páginas correspondientes.

No deducir el comportamiento esperado de un ejercicio más allá de lo que indique su consigna.

## 4. Estructura del proyecto

Organizar el proyecto utilizando una carpeta independiente por ejercicio.

Estructura de referencia:

    /
    ├── AGENTS.md
    ├── README.md
    ├── consignas.txt
    ├── index.html
    ├── assets/
    │   ├── css/
    │   │   └── styles.css
    │   └── js/
    │       └── main.js
    └── ejercicios/
        ├── ejercicio-01/
        │   ├── index.html
        │   ├── css/
        │   │   └── styles.css
        │   └── js/
        │       └── script.js
        ├── ejercicio-XX/
        │   ├── index.html
        │   ├── css/
        │   │   └── styles.css
        │   └── js/
        │       └── script.js
        └── ...

La estructura es orientativa: los nombres de las carpetas de ejercicios deben corresponder a la numeración original encontrada en `consignas.txt`.

Si un ejercicio es el número 12, por ejemplo, su carpeta debe llamarse `ejercicio-12`, aunque no existan los ejercicios 10 y 11 en este proyecto.

No crear carpetas ni ejercicios adicionales para completar los números faltantes.

La carpeta `assets/css/` contendrá los estilos generales compartidos por la página principal.

La carpeta `assets/js/` contendrá la lógica de navegación y los comportamientos generales de la interfaz.

Cada ejercicio tendrá su propio HTML, CSS y JavaScript.

Los archivos CSS y JavaScript específicos de cada ejercicio podrán contener estilos adicionales y código inicial, pero no soluciones.

## 5. Página principal

Crear `index.html` como página de inicio del proyecto.

Debe incluir:

- Nombre del proyecto.
- Una breve descripción del propósito del sitio.
- Una presentación visual de los seis ejercicios.
- El número original de cada ejercicio.
- El título de cada ejercicio.
- Un enlace para acceder a cada ejercicio.
- Una indicación visual de que los ejercicios están pendientes de resolución.

La página principal debe funcionar como un índice general.

Los enlaces deben dirigir a las páginas reales de cada ejercicio.

No utilizar enlaces ficticios ni destinos inexistentes.

La navegación debe construirse a partir de los ejercicios que realmente existen en el proyecto, respetando su numeración original.

## 6. Navegación

Implementar una barra de navegación compartida visualmente en todas las páginas.

Debe permitir:

- Volver al inicio.
- Acceder a los ejercicios disponibles.
- Identificar el ejercicio actual.
- Distinguir visualmente el enlace activo.
- Navegar entre ejercicios sin regresar obligatoriamente a la página principal.

La barra de navegación debe adaptarse a dispositivos móviles.

Si los enlaces de los seis ejercicios no caben horizontalmente, utilizar una solución responsive, como un menú desplegable accesible o una lista desplazable horizontalmente.

No utilizar JavaScript para generar código HTML mediante cadenas innecesariamente complejas.

Priorizar una implementación clara, semántica y fácil de mantener.

## 7. Página de cada ejercicio

Cada ejercicio tendrá una página HTML independiente.

Cada página debe incluir:

1. Barra de navegación.
2. Número original del ejercicio.
3. Título del ejercicio.
4. Consigna original completa.
5. Un área de trabajo para implementar la solución.
6. Un área de resultados.
7. Indicaciones de uso cuando sean necesarias.

La consigna debe estar visible en el HTML renderizado, no únicamente en comentarios del código fuente.

Mantener la consigna fiel al documento `consignas.txt`.

Si el documento contiene saltos de línea, listas o ejemplos relevantes, conservar su estructura cuando sea posible.

No incluir una solución, pseudocódigo orientado a resolver el ejercicio ni una explicación que revele cómo implementarlo.

## 8. Área de resultados

Todos los ejercicios deben disponer de un espacio visual para los resultados.

Cuando la consigna requiera mostrar los resultados en pantalla, preparar un contenedor HTML vacío con un identificador descriptivo.

Por ejemplo:

    <section class="result-section">
        <h2>Resultados</h2>
        <div id="resultado" aria-live="polite"></div>
    </section>

Cuando el ejercicio deba mostrar los resultados exclusivamente en la consola, conservar igualmente el área de resultados y mostrar:

    (ver en consola)

Esta indicación debe estar visible en la página.

No implementar los cálculos ni generar resultados ficticios.

No simular que un ejercicio está resuelto.

El área de resultados debe poder utilizarse posteriormente sin modificar la estructura general de la página.

## 9. JavaScript

Cada ejercicio tendrá su propio archivo `js/script.js`.

La etiqueta `<script>` que cargue el archivo debe colocarse al final del `<body>`, antes de su cierre.

Ejemplo:

    <script src="./js/script.js"></script>
    </body>

No colocar scripts de los ejercicios en el `<head>`.

El archivo JavaScript de cada ejercicio debe contener únicamente una estructura inicial de trabajo, por ejemplo:

    "use strict";

    // Ejercicio pendiente de resolución.
    // Implementar aquí la lógica del ejercicio.

No agregar funciones que resuelvan parcial o totalmente la consigna.

No incluir algoritmos de ejemplo que puedan interpretarse como parte de la solución.

No ejecutar cálculos ni imprimir resultados inventados.

Si un ejercicio requiere resultados en la consola, dejar un comentario que indique dónde implementar la salida correspondiente.

Los scripts deben ser independientes: el código de un ejercicio no debe interferir con el de otro.

El archivo `assets/js/main.js` debe encargarse exclusivamente de las funcionalidades generales de la interfaz y la navegación.

## 10. Estilos

Crear un diseño visual compartido, simple, moderno, agradable y coherente.

Utilizar CSS3 sin frameworks.

Definir variables CSS globales para centralizar:

- Colores.
- Tipografía.
- Espaciados.
- Bordes.
- Radios.
- Sombras.
- Anchos máximos del contenido.

El diseño debe incluir:

- Fondo visualmente agradable.
- Contenido centralizado.
- Tipografía legible.
- Jerarquía clara de títulos.
- Tarjetas de ejercicios.
- Botones y enlaces reconocibles.
- Estados hover y focus.
- Indicadores visuales del ejercicio actual.
- Áreas de consigna y resultados claramente diferenciadas.
- Diseño responsive.

Utilizar una paleta sobria y moderna, con un color de acento.

Evitar animaciones innecesarias, efectos exagerados y elementos decorativos que dificulten la lectura.

Los estilos específicos de cada ejercicio deben reutilizar las variables y componentes generales.

No duplicar innecesariamente el CSS compartido.

Si una página necesita estilos adicionales, incorporarlos en su archivo `css/styles.css`.

## 11. Accesibilidad y calidad

Utilizar HTML semántico.

Incluir:

- `lang="es"` en los documentos HTML.
- Metadatos básicos.
- Un único encabezado principal `h1` por página.
- Etiquetas apropiadas para la navegación.
- Enlaces descriptivos.
- Contraste suficiente entre texto y fondo.
- Estados de foco visibles.
- Atributos ARIA cuando sean necesarios.
- Estructuras compatibles con teclado.

Evitar:

- Errores en las rutas de archivos.
- Enlaces rotos.
- Identificadores duplicados dentro de una página.
- Dependencias innecesarias.
- Código duplicado sin justificación.
- Errores de JavaScript.
- Funcionalidades que no estén solicitadas.

## 12. README.md

Crear un README en español que explique:

- El propósito del proyecto.
- Las tecnologías utilizadas.
- La estructura de carpetas.
- Cómo abrir y utilizar el proyecto.
- Cómo acceder a cada ejercicio.
- Cómo implementar una solución en un ejercicio.
- Cómo consultar la consola del navegador.
- Qué responsabilidades tienen los archivos generales y los archivos específicos.
- Las restricciones técnicas del proyecto.

Indicar que basta con abrir `index.html` en un navegador moderno.

Si la configuración de seguridad del navegador impide alguna funcionalidad al abrir archivos locales, explicar que puede utilizarse un servidor estático local sin añadir dependencias al proyecto.

No presentar el proyecto como una aplicación que necesita instalar paquetes o ejecutar un backend.

## 13. Reglas estrictas

- No resolver ninguno de los seis ejercicios.
- No alterar las consignas originales.
- No modificar `consignas.txt`.
- No eliminar ejercicios existentes.
- No renumerar los ejercicios.
- No añadir ejercicios que no estén en el documento.
- No añadir dependencias externas.
- No introducir frameworks.
- No crear un backend.
- No generar resultados ficticios.
- No incluir código que anticipe la solución.
- No colocar los scripts de los ejercicios en el `<head>`.
- No dejar enlaces internos rotos.

Si ya existen archivos relevantes, inspeccionarlos antes de modificarlos y conservar el contenido útil.

## 14. Criterios de aceptación

El trabajo se considera terminado cuando:

1. Se han identificado correctamente los seis ejercicios de `consignas.txt`.
2. Se conserva su numeración original.
3. Existe una página principal que permite acceder a todos los ejercicios.
4. Cada ejercicio tiene su propia carpeta y sus archivos HTML, CSS y JS.
5. Todas las páginas muestran su consigna original.
6. Todos los ejercicios disponen de un área de resultados.
7. Los ejercicios orientados a consola muestran la indicación "(ver en consola)".
8. Los archivos JavaScript están enlazados al final del `<body>`.
9. La navegación es funcional y coherente en todas las páginas.
10. Los estilos generales mantienen una identidad visual común.
11. El diseño funciona en pantallas de escritorio y móviles.
12. El proyecto funciona sin frameworks ni dependencias externas.
13. Se ha creado un README.md útil y completo.
14. No se ha resuelto ninguno de los ejercicios.
15. No existen rutas rotas ni errores evidentes en la consola.
16. Se ha revisado la implementación final y se ha comprobado el cumplimiento de estas reglas.

Al finalizar, presentar un resumen de los archivos creados, las decisiones tomadas y las verificaciones realizadas.