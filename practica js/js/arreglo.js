//compras de supermercado
//let Carrito=["leche", 1,
 //"carne",2, "papa",3, "fideos", 1];

 /*console.log("Item: ",carrito[0]);
 console.log("Cantidad: ",carrito[1]);
 console.log("Item: ",carrito[2]);
 console.log("Cantidad: ",carrito[3]);
 console.log("Item: ",carrito[4]);
 console.log("Cantidad: ",carrito[5]);
 console.log("Item: ",carrito[6]);
 console.log("Cantidad: ",carrito[7]);
 //como adicionar un nuevo item y cantidad
 // Agregar un nuevo ítem y cantidad al final del carrito
carrito.push("arroz", 2);

// Mostrar el contenido actualizado del carrito
console.log("Carrito de compras actualizado:", carrito);*/
/*let item = {nombre:"Leche", cantidad:1};
console.log("Item:", item.nombre);
console.log("Cantidad: ",item.cantidad);

let Carrito=[{nombre: "Leche", cantidad: 1}, 
             {nombre: "carne", cantidad:2}, {nombre: "fideo", cantidad:1},
             {nombre:"papa", cantidad:3}];
console.log(carrito);
//Imprimir con etiquetas
//Adicionar un nuevo registro
console.log("Contenido del carrito");
Carrito.array.forEach(item => {
    console.log("item",intem.nombre);
    console.log("cantidad:",item.cantidad);

    
})
let nuevoitem={nombre: "soda", cantidad: 4};
Carrito.push(nuevoitem);
//carrito actualizado
console.log("carrito actualizado0;");
Carrito.forEach(item => {
    console.log("item", item.nombre);
    console.log("cantidad", item.cantidad);
})*/
// Definir el precio unitario de cada artículo
// Definir el carrito de compras inicial
// Definir el carrito de compras inicial
// Definir el carrito de compras inicial
let Carrito = [
    {nombre: "Leche", cantidad: 1},
    {nombre: "Carne", cantidad: 2},
    {nombre: "Fideo", cantidad: 1},
    {nombre: "Papa", cantidad: 3}
];

// Definir el precio unitario de cada artículo
let precios = {
    "Leche": 2.5,
    "Carne": 8,
    "Fideo": 1.5,
    "Papa": 1,
    "Aceite": 3
};

// Función para calcular el total de cada artículo
function calcularTotal(item) {
    return item.cantidad * precios[item.nombre];
}

// Agregar un nuevo registro al carrito de compras
let nuevoRegistro = {nombre: "Aceite", cantidad: 1};
Carrito.push(nuevoRegistro);

// Mostrar el contenido actualizado del carrito con etiquetas adicionales
console.log("\nCarrito de compras actualizado:");
Carrito.forEach(item => {
    let total = calcularTotal(item);
    console.log("Ítem:", item.nombre, "- Cantidad:", item.cantidad, "- Precio unitario:", precios[item.nombre], "- Total:", total);
});
