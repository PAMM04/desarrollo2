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
/*function generarNota(min, max) {
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
console.log("Promedio de notas:", estadisticas.promedio);*/
/*let personas = [
    { nombre: "Juan" },
    { nombre: "María",  },
    { nombre: "Pedro",  },
    { nombre: "Ana",
    nombre: "Paulo",
      }
]
console.log(personas);*/
// Lista de nombres
/*let nombres = ["Juan", "María", "Pedro", "Ana", "Luis", "Laura", "Carlos", "Sofía", "Diego", "Elena"];

// Función para generar una nota aleatoria entre un rango dado
function generarNota(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generar el array de 10 objetos con nombres de la lista
let arrayPersonas = [];

for (let i = 0; i < 10; i++) {
    // Seleccionar un nombre aleatorio de la lista de nombres y eliminarlo
    let nombreIndex = Math.floor(Math.random() * nombres.length);
    let nombreAleatorio = nombres.splice(nombreIndex, 1)[0];
    
    let notaAleatoria = generarNota(20, 100);
    arrayPersonas.push({ nombre: nombreAleatorio, nota: notaAleatoria });
}

// Mostrar el array generado
console.log("Array de personas:");
console.log(arrayPersonas);
// Lista de nombres
let nombres = ["Juan", "María", "Pedro", "Ana", "Luis", "Laura", "Carlos", "Sofía", "Diego", "Elena"];

// Función para generar una nota aleatoria entre un rango dado
function generarNota(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Función para obtener la nota mayor, la nota menor y el promedio de todas las notas
function obtenerEstadisticasNotas(personas) {
    let notas = personas.map(persona => persona.nota);
    let notaMayor = Math.max(...notas);
    let notaMenor = Math.min(...notas);
    let sumaNotas = notas.reduce((total, nota) => total + nota, 0);
    let promedio = sumaNotas / personas.length;

    return { notaMayor, notaMenor, promedio };
}

/*Generar el array de 10 objetos con nombres de la lista
let arrayPersonas = [];

for (let i = 0; i < 10; i++) {
    // Seleccionar un nombre aleatorio de la lista de nombres y eliminarlo
    let nombreIndex = Math.floor(Math.random() * nombres.length);
    let nombreAleatorio = nombres.splice(nombreIndex, 1)[0];
    
    let notaAleatoria = generarNota(20, 100);
    arrayPersonas.push({ nombre: nombreAleatorio, nota: notaAleatoria });
}

// Mostrar el array de personas generado
console.log("Array de personas:");
console.log(arrayPersonas);

// Calcular y mostrar las estadísticas de las notas
let estadisticas = obtenerEstadisticasNotas(arrayPersonas);
console.log("Nota mayor:", estadisticas.notaMayor);
console.log("Nota menor:", estadisticas.notaMenor);
console.log("Promedio de notas:", estadisticas.promedio);*/
// Lista de nombres
/*let nombres = ["Juan", "María", "Pedro", "Ana", "Luis", "Laura", "Carlos", "Sofía", "Diego", "Elena"];

// Función para generar una nota aleatoria entre un rango dado
function generarNota(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Función para obtener la nota mayor, la nota menor y el promedio de todas las notas
function obtenerEstadisticasNotas(personas) {
    let notas = personas.map(persona => persona.nota);
    let notaMayor = Math.max(...notas);
    let notaMenor = Math.min(...notas);
    let sumaNotas = notas.reduce((total, nota) => total + nota, 0);
    let promedio = sumaNotas / personas.length;

    return { notaMayor, notaMenor, promedio };
}

// Generar el array de 10 objetos con nombres de la lista
let arrayPersonas = [];

for (let i = 0; i < 10; i++) {
    // Seleccionar un nombre aleatorio de la lista de nombres y eliminarlo
    let nombreIndex = Math.floor(Math.random() * nombres.length);
    let nombreAleatorio = nombres.splice(nombreIndex, 1)[0];
    
    let notaAleatoria = generarNota(20, 100);
    arrayPersonas.push({ nombre: nombreAleatorio, nota: notaAleatoria });
}

// Mostrar el array de personas generado
console.log("Array de personas:");
console.log(arrayPersonas);

// Calcular y mostrar las estadísticas de las notas
let estadisticas = obtenerEstadisticasNotas(arrayPersonas);
console.log("Nota mayor:", estadisticas.notaMayor);
console.log("Nota menor:", estadisticas.notaMenor);
console.log("Promedio de notas:", estadisticas.promedio);*/
/*et notas=[{nombre:"Juan",nota: 0 },{nombre:"Juan",nota: 0},{nombre:"Juan",nota: 0},{nombre:"Juan",nota: 0},{nombre:"Pedro",nota: 0}];
notas.forEach(nota=>{
    nota.nota= Math.floor(Math.random()*(10-2+1));
});

notas.forEach(nota=>{}
    let $clasificar;
    switch(nota.nota)){
        case 2: case 3: case 4:
        $clasificar="Insuficiente";
        break;
        case 5: case 6:
        $clasificar="Suficiente";
        break;
        case 7: case 8:
        $clasificar="Bien";
        break;
        case 9:
        $clasificar="SNotable";
        case 10:
        $clasificar="Sobresaliente";
        break;
        default:
        $clasificar="Fuera de rango";
    
 }
console.log(nota.nombre, " - ", nota.nota, " :", $clasificar, "/n");
});*/
/*let notas = [
    { nombre: "Juan", nota: 0 },
    { nombre: "Juan", nota: 0 },
    { nombre: "Juan", nota: 0 },
    { nombre: "Juan", nota: 0 },
    { nombre: "Pedro", nota: 0 }
];

notas.forEach(nota => {
    nota.nota = Math.floor(Math.random() * (10 - 2 + 1) + 2);
    let clasificar;
    switch (nota.nota) {
        case 2:
        case 3:
        case 4:
            clasificar = "Insuficiente";
            break;
        case 5:
        case 6:
            clasificar = "Suficiente";
            break;
        case 7:
        case 8:
            clasificar = "Bien";
            break;
        case 9:
            clasificar = "Notable";
            break;
        case 10:
            clasificar = "Sobresaliente";
            break;
        default:
            clasificar = "Fuera de rango";
    }
    console.log(nota.nombre, " - ", nota.nota, " :", clasificar);
});*/
// Array de nombres
/*let nombres = ["Juan", "María", "Pedro", "Ana", "Luis", "Laura", "Carlos", "Sofía", "Diego", "Elena", "Marta", "Pablo", "Lucía", "Andrés", "Carmen", "David", "Isabel", "Javier", "Beatriz", "José"];

// Array de apellidos
let apellidos = ["García", "Rodríguez", "González", "Fernández", "López", "Martínez", "Sánchez", "Pérez", "Martín", "Gómez", "Ruiz", "Díaz", "Hernández", "Alvarez", "Jiménez", "Moreno", "Muñoz", "Álvarez", "Romero", "Navarro"];

// Función para generar un índice aleatorio dentro del rango válido de nombres o apellidos
function indiceAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Función para generar un array de nombres aleatorios
function generarNombresAleatorios(cantidad) {
    let nombresAleatorios = [];
    for (let i = 0; i < cantidad; i++) {
        let indice = indiceAleatorio(0, nombres.length - 1);
        nombresAleatorios.push(nombres[indice]);
    }
    return nombresAleatorios;
}

// Función para generar un array de apellidos aleatorios
function generarApellidosAleatorios(cantidad) {
    let apellidosAleatorios = [];
    for (let i = 0; i < cantidad; i++) {
        let indice = indiceAleatorio(0, apellidos.length - 1);
        apellidosAleatorios.push(apellidos[indice]);
    }
    return apellidosAleatorios;
}
// Función para generar un nombre completo aleatorio combinando un nombre y un apellido aleatorio



// Ejemplo de uso para generar 10 nombres aleatorios
let cantidadNombres = 10;
let nombresGenerados = generarNombresAleatorios(cantidadNombres);
console.log("Array de nombres aleatorios:");
console.log(nombresGenerados);

// Ejemplo de uso para generar 5 apellidos aleatorios
let cantidadApellidos = 10;
let apellidosGenerados = generarApellidosAleatorios(cantidadApellidos);
console.log("Array de apellidos aleatorios:");
console.log(apellidosGenerados);
function generarNombreCompleto() {
    let nombreAleatorio = nombres[indiceAleatorio(0, nombres.length - 1)];
    let apellidoAleatorio = apellidos[indiceAleatorio(0, apellidos.length - 1)];
    return nombreAleatorio + " " + apellidoAleatorio;
}

// Ejemplo de uso para generar un nombre completo aleatorio
let nombreCompleto = generarNombreCompleto();
console.log("Nombre completo aleatorio:", nombreCompleto);*/
// Array de nombres
/*let nombres = ["Juan", "María", "Pedro", "Ana", "Luis", "Laura", "Carlos", "Sofía", "Diego", "Elena", "Marta", "Pablo", "Lucía", "Andrés", "Carmen", "David", "Isabel", "Javier", "Beatriz", "José"];

// Array de apellidos
let apellidos = ["García", "Rodríguez", "González", "Fernández", "López", "Martínez", "Sánchez", "Pérez", "Martín", "Gómez", "Ruiz", "Díaz", "Hernández", "Alvarez", "Jiménez", "Moreno", "Muñoz", "Álvarez", "Romero", "Navarro"];

// Función para generar un índice aleatorio dentro del rango válido de nombres o apellidos
function indiceAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Función para generar un nombre completo aleatorio combinando un nombre y un apellido aleatorio
function generarNombreCompleto() {
    let nombreAleatorio = nombres[indiceAleatorio(0, nombres.length - 1)];
    let apellidoAleatorio = apellidos[indiceAleatorio(0, apellidos.length - 1)];
    return nombreAleatorio + " " + apellidoAleatorio;
}

// Imprimir 10 nombres y apellidos combinados de manera aleatoria
console.log("Nombres y apellidos aleatorios:");
for (let i = 0; i < 10; i++) {
    console.log(generarNombreCompleto());
}*/
// Array de nombres
/*let nombres = ["Juan", "María", "Pedro", "Ana", "Luis", "Laura", "Carlos", "Sofía", "Diego", "Elena", "Marta", "Pablo", "Lucía", "Andrés", "Carmen", "David", "Isabel", "Javier", "Beatriz", "José"];

// Array de apellidos
let apellidos = ["García", "Rodríguez", "González", "Fernández", "López", "Martínez", "Sánchez", "Pérez", "Martín", "Gómez", "Ruiz", "Díaz", "Hernández", "Alvarez", "Jiménez", "Moreno", "Muñoz", "Álvarez", "Romero", "Navarro"];

// Función para generar un índice aleatorio dentro del rango válido de nombres o apellidos
function indiceAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Función para generar un nombre completo aleatorio combinando un nombre y un apellido aleatorio
function generarNombreCompleto() {
    let nombreAleatorio = nombres[indiceAleatorio(0, nombres.length - 1)];
    let apellidoAleatorio = apellidos[indiceAleatorio(0, apellidos.length - 1)];
    return nombreAleatorio + " " + apellidoAleatorio;
}

// Función para generar una cantidad específica de nombres y apellidos aleatorios
function generarNombresApellidos(cantidad) {
    let nombresApellidos = [];
    for (let i = 0; i < cantidad; i++) {
        nombresApellidos.push(generarNombreCompleto());
    }
    return nombresApellidos;
}

// Imprimir 10 nombres y apellidos combinados de manera aleatoria
console.log("Nombres y apellidos aleatorios:");
let cantidadNombresApellidos = 20;
let nombresApellidosAleatorios = generarNombresApellidos(cantidadNombresApellidos);
nombresApellidosAleatorios.forEach(nombreApellido => {
    console.log(nombreApellido);
});*/

let nombres = ["Juan", "María", "Pedro", "Ana", "Luis", "Laura", "Carlos", "Sofía", "Diego", "Elena", "Marta", "Pablo", "Lucía", "Andrés", "Carmen", "David", "Isabel", "Javier", "Beatriz", "José"];

// Array de apellidos
let apellidos = ["García", "Rodríguez", "González", "Fernández", "López", "Martínez", "Sánchez", "Pérez", "Martín", "Gómez", "Ruiz", "Díaz", "Hernández", "Alvarez", "Jiménez", "Moreno", "Muñoz", "Álvarez", "Romero", "Navarro"];

let nomape=[];

function generarNomApe(){
    let normal, apeal;
    for(let i=0;1<NELEMENTOS;i++){
        normal=nombres[Math.floor(Math.random()*nombres.length)];
        apeal=apellidos[Math.floor(Math.random()*apellidos.length)];
        nomape.push(normal+" "+apeal);

    }
}
function imprimir(){
    nomape.forEach(persona=>{
        console.log(persona);
    });
}
generarNomApe();
imprimir();




