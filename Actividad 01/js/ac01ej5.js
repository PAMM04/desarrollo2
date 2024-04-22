// Arrays de nombres y apellidos
const nombres = ["juan", "maria", "pedro", "laura"];
const apellidos = ["gomez", "perez", "gonzalez", "rodriguez"];

// Función para generar un nuevo array combinando nombres y apellidos de forma aleatoria
function combinarNombresYApellidos(nombres, apellidos) {
    const nombresApellidosCombinados = [];
    const totalNombres = nombres.length;
    const totalApellidos = apellidos.length;

    // Iterar sobre la longitud máxima de ambos arrays para combinarlos de forma aleatoria
    for (let i = 0; i < Math.max(totalNombres, totalApellidos); i++) {
        // Obtener un nombre aleatorio y formatearlo
        const nombre = nombres[Math.floor(Math.random() * totalNombres)];
        const nombreFormateado = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();

        // Obtener un apellido aleatorio y formatearlo
        const apellido = apellidos[Math.floor(Math.random() * totalApellidos)];
        const apellidoFormateado = apellido.charAt(0).toUpperCase() + apellido.slice(1).toLowerCase();

        // Combinar el nombre y apellido formateados
        nombresApellidosCombinados.push(nombreFormateado + " " + apellidoFormateado);
    }

    return nombresApellidosCombinados;
}

// Generar el nuevo array combinando nombres y apellidos de forma aleatoria
const nombresApellidosAleatorios = combinarNombresYApellidos(nombres, apellidos);

// Imprimir el nuevo array en la consola
console.log("Nombres y apellidos combinados:");
console.log(nombresApellidosAleatorios);
