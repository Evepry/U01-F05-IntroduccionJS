// Arreglos o Arrays

const numeros = [10,20,30,40,50];

console.log(numeros);
console.table(numeros);

const mesesEj1 = new Array('Enero' , 'Febrero' , 'Marzo' , 'Abril' , 'Mayo');

console.table(mesesEj1);

const mesesEj2 = ['Enero' , 'Febrero' , 'Marzo' , 'Abril' , 'Mayo'];

console.table(mesesEj2);

// Puede tener todo tipo de datos

// Acceder a un arreglo

console.log(numeros[4]);
console.log(numeros[2]);
console.log(numeros[200]); // undefined - indefinido - no existe

// Conocer la extencion de un arreglo
console.log(mesesEj2.length);

// Iterar
numeros.forEach( function(numero) {
    console.log(numero);
})