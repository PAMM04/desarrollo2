const readline = require('readline');

// Definir la contraseña válida
const contrasenaValida = "D153n0W3b2";

// Definir los nombres de usuario válidos
const usuariosValidos = ["juan", "pedro", "maria", "raul"];

// Función para validar el usuario y la contraseña
function validarCredenciales(usuario, contrasena) {
    // Verificar si el usuario está en la lista de usuarios válidos
    if (usuariosValidos.includes(usuario)) {
        // Verificar si la contraseña es válida
        if (contrasena === contrasenaValida) {
            return true; // Credenciales válidas
        } else {
            return false; // Contraseña incorrecta
        }
    } else {
        return false; // Usuario incorrecto
    }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Solicitar al usuario y la contraseña
rl.question("Ingrese su nombre de usuario: ", function(usuarioIngresado) {
    rl.question("Ingrese su contraseña: ", function(contrasenaIngresada) {
        // Validar las credenciales ingresadas
        if (validarCredenciales(usuarioIngresado.toLowerCase(), contrasenaIngresada)) {
            console.log("¡Inicio de sesión exitoso!");
        } else {
            console.log("Usuario o contraseña incorrectos. Por favor, inténtelo de nuevo.");
        }
        rl.close();
    });
});
