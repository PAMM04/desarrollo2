// Función para determinar el nombre del navegador en Node.js
/*function obtenerNavegadorEnNode() {
    // En Node.js no podemos obtener el nombre del navegador, así que devolvemos 'desconocido'
    return "desconocido";
}

// Función para determinar el nombre del navegador en el navegador web
function obtenerNavegadorEnNavegador() {
    // Obtener el agente del usuario del navegador
    var userAgent = window.navigator.userAgent;
    
    // Determinar el nombre del navegador
    if (userAgent.indexOf("Firefox") > -1) {
        return "Firefox";
    } else if (userAgent.indexOf("Chrome") > -1) {
        return "Google Chrome";
    } else if (userAgent.indexOf("Safari") > -1) {
        return "Safari";
    } else if (userAgent.indexOf("MSIE") > -1 || userAgent.indexOf("Trident/") > -1) {
        return "Internet Explorer";
    } else {
        return "navegador desconocido";
    }
}

// Función para dar la bienvenida y mostrar el navegador
function darBienvenidaYMostrarNavegador() {
    console.log("¡Bienvenido!");
    var navegador;
    
    if (typeof window !== 'undefined') {
        // Si estamos en un navegador web
        navegador = obtenerNavegadorEnNavegador();
    } else {
        // Si estamos en Node.js
        navegador = obtenerNavegadorEnNode();
    }
    
    console.log("Estás ejecutando el navegador:", navegador);
}

// Llamar a la función principal
darBienvenidaYMostrarNavegador();*/
// Función para determinar el nombre del navegador en Node.js
function obtenerNavegadorEnNode() {
    // En Node.js no podemos obtener el nombre del navegador, así que devolvemos 'desconocido'
    return "desconocido";
}

// Función para determinar el nombre del navegador en el navegador web
function obtenerNavegadorEnNavegador() {
    // Obtener el agente del usuario del navegador
    var userAgent = window.navigator.userAgent;
    
    // Determinar el nombre del navegador
    if (userAgent.indexOf("Firefox") > -1) {
        return "Firefox";
    } else if (userAgent.indexOf("Chrome") > -1) {
        return "Google Chrome";
    } else if (userAgent.indexOf("Safari") > -1) {
        return "Safari";
    } else if (userAgent.indexOf("MSIE") > -1 || userAgent.indexOf("Trident/") > -1) {
        return "Internet Explorer";
    } else {
        return "navegador desconocido";
    }
}

// Función para dar la bienvenida y mostrar el navegador
function darBienvenidaYMostrarNavegador() {
    console.log("¡Bienvenido!");
    var navegador;
    
    if (typeof window !== 'undefined') {
        // Si estamos en un navegador web
        navegador = obtenerNavegadorEnNavegador();
        console.log("Estás ejecutando el navegador:", navegador);
    } else {
        // Si estamos en Node.js
        navegador = obtenerNavegadorEnNode();
        console.log("No se puede determinar el navegador en Node.js");
    }
}

// Llamar a la función principal
darBienvenidaYMostrarNavegador();

