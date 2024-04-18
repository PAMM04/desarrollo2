//const INTERVALO=10;
//console.log("Intervalo sera de ", INTERVALO, "minutos ");
//var INTERVALO=15; No se permite por ser constante//
/*
var Intervalo=15;
console.log("Intervalo sera de ", Intervalo, "minutos ");
Intervalo=20;
console.log("Intervalo sera de ", Intervalo, "minutos ");*/ 
/*let varb=true;//booleano tipo de dato
let varn=3.141592;//numerico
let vars="Texto string";//cadena
let var1; //indefinido

console.log("Para la variable varb= ",varb, " con el tipo de dato =", typeof varb);
console.log("Para la variable varn= ",varn, " con el tipo de dato =", typeof varn);
console.log("Para la variable vars= ",vars, " con el tipo de dato =", typeof vars);
console.log("Para la variable var1= ",var1, " con el tipo de dato =", typeof var1);

var1=vars;
console.log("Para la variable var1= ",var1, " con el tipo de dato =", typeof var1);*/

//Realizar las siguientes conversiones implicitas.
console.log("Liata de Implicitas");
var1=15.25;
let var2=0;
let var3=true;
let var4="100";
let varx;
varx = var1;
varx = var2;
console.log("Para la variable vars= ",varx, " con el tipo de dato =", typeof varx);
varx=var3;
console.log("Para la variable vars= ",varx, " con el tipo de dato =", typeof varx);
varx=var4;
console.log("Para la variable vars= ",varx, " con el tipo de dato =", typeof varx);

console.log("Lista de Explicitas");

varx=var1+var2
console.log("Para la variable vars= ",varx, " con el tipo de dato =", typeof varx);
varx=var2+var3;
console.log("Para la variable vars= ",varx, " con el tipo de dato =", typeof varx);
varx=var1+Number(var4);//Buscar una funcion de conversion
console.log("Para la variable vars= ",varx, " con el tipo de dato =", typeof varx);
varx=var3;

/*var1 = var1 + var2;  // var1 se convierte implícitamente a un número entero
console.log(var1);   // Resultado: 15.25 (no hay cambio)

var2 = var2 + var3;  // var2 se convierte implícitamente a un número (0 -> 0. true -> 1)
console.log(var2);   // Resultado: 1

var3 = var3 + var4;  // var3 se convierte implícitamente a un número (true -> 1. "100" -> 100)
console.log(var3);   // Resultado: 101

var4 = var4 + varx;  // varx se convierte implícitamente a una cadena de texto (undefined -> "undefined")
console.log(var4);   // Resultado: "100undefined"
//conversiones explicitas
console.log("Lista de Explicitas");
var1 = var1 + parseFloat(var4);  // Convertir var4 a punto flotante y sumarlo a var1
console.log(var1);                // Resultado: 115.25

var2 = var2 + Number(var3);  // Convertir var3 a número y sumarlo a var2
console.log(var2);            // Resultado: 1

var3 = var3 + Boolean(var4);  // Convertir var4 a booleano (true) y sumarlo a var3
console.log(var3);            // Resultado: 2

var4 = var4 + String(varx);  // Convertir varx a cadena de texto ("undefined") y concatenarlo a var4
console.log(var4);            // Resultado: "100undefined"*/



