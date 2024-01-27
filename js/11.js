// Objetos

const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

console.log(producto)

const precioProducto = producto.precio;
const nombre = producto.nombreProducto;

console.log(precioProducto);
console.log(nombre);


// Destructuring Objects

const {precio} = producto;
const {nombreProducto} = producto;

console.log(precio);
console.log(nombreProducto);