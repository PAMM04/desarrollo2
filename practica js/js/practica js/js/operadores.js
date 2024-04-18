/*let a=10;
let b=5;
a+=1;
console.log(a);
a=a+b;
console.LOG('a=a+b ',+a);
a=11;
a+=b;
console.LOG('a+=b :',+a);*/
//Genera un array de 10
// Nombre: "Juan" nota: randomico entre 20-100
//Mostrar la nota mayor, menor y el promedio.
// Función para generar un número aleatorio entre un rango dado
function generarNota(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generar el array de 10 objetos
let arrayPersonas = [];

for (let i = 0; i < 10; i++) {
    let notaAleatoria = generarNota(20, 100);
    arrayPersonas.push({ nombre: "Juan", nota: notaAleatoria });
}

// Mostrar el array generado
console.log("Array de personas:");
console.log(arrayPersonas);
// Función para obtener la nota mayor, la nota menor y el promedio
function obtenerEstadisticasNotas(personas) {
    let notaMayor = personas[0].nota;
    let notaMenor = personas[0].nota;
    let sumaNotas = personas[0].nota;

    for (let i = 1; i < personas.length; i++) {
        let notaActual = personas[i].nota;
        sumaNotas += notaActual;

        if (notaActual > notaMayor) {
            notaMayor = notaActual;
        }

        if (notaActual < notaMenor) {
            notaMenor = notaActual;
        }
    }

    let promedio = sumaNotas / personas.length;

    return { notaMayor, notaMenor, promedio };
}

// Llamamos a la función y mostramos los resultados
let estadisticas = obtenerEstadisticasNotas(arrayPersonas);
console.log("Nota mayor:", estadisticas.notaMayor);
console.log("Nota menor:", estadisticas.notaMenor);
console.log("Promedio de notas:", estadisticas.promedio);
/*let personas = [
    { nombre: "Juan" },
    { nombre: "María",  },
    { nombre: "Pedro",  },
    { nombre: "Ana",
    nombre: "Paulo",
      }
]
console.log(personas);*/