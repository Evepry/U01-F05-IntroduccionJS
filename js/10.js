// Objetos

const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

console.log(producto)

/*
console.log(producto.nombreProducto)
console.log(producto.precio)
console.log(producto.disponible)
*/

// Agregar nuevas propiedades al Objeto
producto.imagen = 'imagen.jpg'

// Eliminar propiedades al objeto
delete producto.disponible

console.log(producto);