// "use strict"; // Corre JS en modo estricto

// Objetos

const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

// No permite la modificacion del objeto
Object.freeze(producto);

// Si permite modificar las propiedades existente
Object.seal(producto);

producto.imagen = 'imagen.jpg';

console.log(Object.isFrozen(producto));

console.log(Object.isSealed(producto));

console.log(producto);