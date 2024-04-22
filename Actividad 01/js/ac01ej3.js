// Función para verificar si un número es primo
function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

// Función para generar un número primo aleatorio menor que 110
function generarNumeroPrimoAleatorio() {
    let numeroAleatorio;
    do {
        numeroAleatorio = Math.floor(Math.random() * 110);
    } while (!esPrimo(numeroAleatorio));
    return numeroAleatorio;
}

// Función para generar un array de N números primos aleatorios menores que 110
function generarNumerosPrimosAleatorios(N) {
    const numerosPrimos = [];
    while (numerosPrimos.length < N) {
        const numeroPrimo = generarNumeroPrimoAleatorio();
        numerosPrimos.push(numeroPrimo);
    }
    return numerosPrimos;
}

// Número de números primos que quieres generar
const cantidadNumerosPrimos = 40;

// Generar el array de números primos aleatorios
const numerosPrimosAleatorios = generarNumerosPrimosAleatorios(cantidadNumerosPrimos);

// Imprimir los números primos en la consola
console.log("Números primos generados:");
console.log(numerosPrimosAleatorios);

