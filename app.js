// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// app.js

/**
 * @description Lógica para la aplicación de Amigo Secreto.
 * @author [Gustavo]
 * @version 1.0
 */

/**
 * @type {Array<string>} Lista para almacenar los nombres de los amigos.
 */
let amigos = [];

/**
 * @description Función para agregar un amigo a la lista.
 */
function agregarAmigo() {
    const nombreAmigo = document.getElementById("amigo");
    const listaAmigos = document.getElementById("listaAmigos");

    const nombre = nombreAmigo.value.trim(); // Obtener el valor y eliminar espacios en blanco

    if (nombre === "") {
        alert("Por favor, ingresa un nombre."); // Alerta si el campo está vacío
        return; // Salir de la función si no hay nombre
    }

    if (amigos.includes(nombre)) {
        alert("Este amigo ya ha sido agregado."); // Alerta si el nombre ya existe
        return;
    }

    amigos.push(nombre); // Agregar el nombre a la lista de amigos

    // Crear un nuevo elemento de lista (li)
    const nuevoAmigo = document.createElement("li");
    nuevoAmigo.textContent = nombre; // Asignar el nombre al elemento li
    listaAmigos.appendChild(nuevoAmigo); // Agregar el elemento li a la lista ul

    nombreAmigo.value = ""; // Limpiar el campo de entrada
}


/**
 * @description Función para realizar el sorteo del amigo secreto.
 */
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debes ingresar al menos dos amigos para realizar el sorteo.");
        return;
    }

    // Fisher-Yates Shuffle para mezclar el array 'amigos' de forma aleatoria.
    // Algoritmo eficiente para barajar arrays.
    for (let i = amigos.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [amigos[i], amigos[j]] = [amigos[j], amigos[i]]; // Intercambio de elementos
    }


    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpiar resultados anteriores

    // Crear el mensaje del resultado del sorteo.
    for (let i = 0; i < amigos.length; i++) {
        const amigoActual = amigos[i];
        const amigoAsignado = amigos[(i + 1) % amigos.length]; // Usando el módulo (%) para "circular" la lista

        const mensaje = document.createElement("li");
        mensaje.textContent = `${amigoActual} le regala a ${amigoAsignado}`;
        resultado.appendChild(mensaje);
    }
}


// Evento para agregar amigo con la tecla Enter
document.getElementById("amigo").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        agregarAmigo();
    }
});