// TIPOS DE DATOS EN JAVASCRIPT

/*
 * Tabla de Tipos de Datos en JavaScript
 * 
 * |--------------|----------------------------------------|----------------------------------------|
 * | Tipo de Dato | Descripción                            | Ejemplo                                |
 * |--------------|----------------------------------------|----------------------------------------|
 * | Number       | números, tanto enteros como flotantes  | let a = 3; let b = 3.14;               |
 * | String       | secuencias de caracteres               | let name = "Alice";                    |
 * | Boolean      | valores verdaderos o falsos            | let isActive = true;                   |
 * | Undefined    | una variable que no ha sido asignada   | let x;                                 |
 * | Null         | la ausencia intencional de un valor    | let y = null;                          |
 * | Symbol       | valores únicos e inmutables            | let sym = Symbol('A');                 |
 * | Object       | colecciones de propiedades             | let obj = {name: "Alice", age: 30};    |
 * | BigInt       | números enteros más grandes que 2^53-1 | let bigInt = 12345678901234567890n;    |
 * |--------------|----------------------------------------|----------------------------------------|
 * 
 */

// String o Cadena de Texto

const producto = "Monitor de 20 pulgadas";
const producto1 = "Monitor de 20\" 1";
const producto2 = 'Monitor de 20" 2';



console.log(producto);
console.log(producto1);
console.log(producto2);
console.log(producto2.length);

console.log(typeof producto);

// IndexOf
console.log(producto.indexOf('tablet'));
console.log(producto.indexOf('de'));

// Includes (retorno true or false)
console.log(producto.includes('tablet'));
console.log(producto.includes('de'));