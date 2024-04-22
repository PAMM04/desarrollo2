const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función para contar la cantidad de veces que aparece la letra "o" en una frase
function contarLetraO(frase) {
    let cantidadO = 0;
    for (let letra of frase) {
        if (letra.toLowerCase() === 'o') {
            cantidadO++;
        }
    }
    return cantidadO;
}

// Función para obtener todas las vocales que aparecen en una frase
function obtenerVocales(frase) {
    const vocales = [];
    for (let letra of frase) {
        if ('aeiouAEIOU'.includes(letra)) {
            if (!vocales.includes(letra.toLowerCase())) {
                vocales.push(letra.toLowerCase());
            }
        }
    }
    return vocales;
}

// Función para contar la cantidad de veces que aparece cada vocal en una frase
function contarVocales(frase) {
    const contadorVocales = {};
    for (let letra of frase) {
        const vocalMinuscula = letra.toLowerCase();
        if ('aeiou'.includes(vocalMinuscula)) {
            if (!contadorVocales[vocalMinuscula]) {
                contadorVocales[vocalMinuscula] = 0;
            }
            contadorVocales[vocalMinuscula]++;
        }
    }
    return contadorVocales;
}

// Pedir al usuario que ingrese una frase
rl.question('Por favor, ingresa una frase: ', (frase) => {
  // Contar la cantidad de veces que aparece la letra "o"
  const cantidadO = contarLetraO(frase);
  console.log(`La letra 'o' aparece ${cantidadO} veces en la frase.`);

  // Obtener las vocales que aparecen en la frase
  const vocales = obtenerVocales(frase);
  console.log(`Las vocales que aparecen en la frase son: ${vocales.join(', ')}.`);

  // Contar la cantidad de veces que aparece cada vocal en la frase
  const contadorVocales = contarVocales(frase);
  console.log('Cantidad de veces que aparece cada vocal:');
  for (let vocal in contadorVocales) {
      console.log(`${vocal}: ${contadorVocales[vocal]}`);
  }

  rl.close();
});
