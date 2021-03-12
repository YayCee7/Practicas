// log de consola: esto te ayuda a mostrar mensajes en cosola.

/* console.log("IDK")
console.log("XD")
console.log("COOL")
console.log('HELLO')
console.log('WORLD')
console.log(2)*/ //se pueden dejar sms, numeros, ecuaciones y variables.

// alerta para el usuario //

alert('Bienvenido a mi test de js');

/*let cajita = 'ñapato'; // variable tipo: texto.
cajita = 2+2;

let gumball = cajita;

console.log(gumball);*/

// Operaciones Matemáticas. //

/*console.log('>>operaciones matematicas<<');

let eq = ' = resultado de ecuación.';
let num1 = 23;
let num2 = 7;
let num3 = -45;
let resultado = num1+num2;

console.log(resultado+eq);
console.log(num1-num2+eq);
console.log(num1*num3+eq);
console.log(num1/num2+eq);
console.log(num1%num3+eq);*/

// Operaciones de incremento y decremento. //

/*console.log('>>incremento y decremento<<')
console.log('Incremento')
{let a = 5;

console.log(a)
console.log(a++)
console.log(a)
console.log(++a);

console.log('Decremento')
let b = 5;

console.log(b)
console.log(b--)
console.log(b)
console.log(--b);}*/

// operadores de asignación. //

/*console.log('>>Operaciones de asignación<<');

let c = 10;

c = c+5;
console.log(c);

c += 3;
console.log(c);

c -= 4;
console.log(c);

c *= 6;
console.log(c);

c /= 8;
console.log(c);

c %= 7;
console.log(c);

// entrada de información. //

let nombre = prompt('Hola, como te llamas?');

alert('Hola '+nombre+', buen dia.');

console.log(nombre);*/

// sumar X num (min:2) mostrar en alert el resultado //

/*let numx = parseInt(prompt('ingrese el primer numero')); // prompt se usa para guardar respuesta en texto.
let numy = parseInt(prompt('sumar con:')); // parseInt convierte el texto en numeros enteros.

alert(numx+numy);

console.log(numx+numy);

const PI = 3.14; //una constante es para añadir un valor que sera permanente y no será re-emplazada.

console.log(PI);*/

// String //

/*let strings = "Cadenas";
let strings1 = " _cadenas de ejemplos en js...  ";
let strings2 = "Cadenas multiples ";

console.log(strings.length);//te da el valor que ocupa la variable//
console.log(strings.toUpperCase());//Devuelve el valor en MAYUSCULAS//
console.log(strings.toLowerCase());//Devuelve el valor en minsculas//
console.log(strings.split()) //Corta un texto dependiendo el caracter o texto especificado, devuelve un array
console.log(strings.indexOf('de'));//Devuelve la posición del valor que existe o no entre variables//
console.log(strings.replace('Cadenas','Strings'));//Este parametro sirve para re-emplazar un valor dado//
console.log(strings.substring(0,6));//Funciona para devolver un valor desde un inicio y un fin//
console.log(strings.slice(0,-3));//Es igual que Substring pero acepta valores negativos y lee en el orden que se le ponga//
console.log(strings1.trim());//Este parametro sirve para eliminar los espacios vacios al comienzo y al final//
console.log(strings.startsWith('C'));//Como la plabra lo indica, "Inicia con" + el valor que se pide//
console.log(strings1.startsWith('e',13));//Y se puede decir desde que posicion//
console.log(strings1.endsWith('...  '));//Aqui es "Termina en" que al igual se puede elegir la posicion//
console.log(strings1.includes('ejemplos'));//Hace lo mismo que indexOf pero te da True o False//
console.log(strings1.includes('a',6));//Y aqui le colocamos a partir de que posicion buscar el valor//
console.log(strings2.repeat(2));//Repetimos la variable tantas veces como le indiquemos//
console.log('Hola Mundo'.repeat(10));//Tambien se puede usar asi//*/

// Template Strings //

/* let firstname = 'Julio';
let secondname = 'Cesar';
let yearsold = '23';

console.log('Hola' + " " + firstname + " " + secondname + ', tienes' + " " + yearsold + " " + 'años.');
console.log(´Hola ${firstname} ${secondname}, tienes ${yearsold} años.´); */

// Condicionales //
/* 
let con = -9;
let sin = 2;

if(con>0){
    console.log('${con} es mayor que 0');
    console.log('${con} es mayor que 0');
}

// Condicional Compuesto //

if(con>0){
    console.log('${con} es mayor que 0');
}
else{
    console.log('${con} es menor que 0');
}

// Condicionales Multiples //

if(con>0){
    console.log('${con} es mayor que 0');
}
else if(con<0){
    console.log('${con} es menor que 0');
}
else{
    console.log('${con} es igual que 0');
} 

// Operadores Logicos //


// && and , || o //

if(con>0 && sin>0){
    console.log(`${con} y ${sin} son mayores que 0`); */


// ' =! `

// && --> todas las condiciones deben cumplirse
// || --> cualquiera debe cumplirse pero no obligatoriamente todas

/* bombillo */

/* let pos = false
let negativo = false

if (pos || negativo){
    alert('Enciende')
}else {
    alert('DOPE')
} */

// == , ===,  !=, !==

// ==, === --> preguntas si son iguales
// == --> si es igual pero no es estricto (si lo que estamos comparando es del mismo tipo)
/* let y2 = "2"

if (y2 === 2){
    alert('y2 es igual a 2')
}
else {
    alert('DOPE x2')
}

// !=, !== ---> si es diferente.. !== --> estricto

let y3 = '3'

if (y3 !== 3){
    alert('y3 es diferente a 3')
}
else {
    alert('y3 no es diferente a 3')
} */

// calcule la myoria de edad de una persona; que este ingrese su edad.

/* let edad = parseInt(prompt('Hola, que edad tiene usted?'))

if (edad>17) {
    alert('Usted es mayor de edad.')
} else if (edad>0 && edad<18) {
    alert('Usted no cumple con la mayoria de edad.')
} else {
    alert('Dato Erroneo.')
} */

// else -> todo lo contrario a eso

// Un programa donde un usuario ingrese su edad y este le diga si es un niño/adolecente/adulto/anciano.

/* let edad = parseInt(prompt('Hola, por favor ingrese su edad'))

if (edad>0 && edad<11){
    alert('es usted un niño.')
} else if (edad>=12 && edad<17){
    alert('es usted un adolecente.')
} else if (edad>=18 && edad<60){
    alert ('usted es un adulto.')
} else if (edad>=60){
    alert ('BOOMER.')
} else {
    alert('Dato Erroneo.')
} */

// Menu de opciones [EJEMPLO]
/* con switch trabajamos casos en concreto. */ 

/* let respuesta = parseInt(prompt('Seleccione una Opcion: 1 al 3 '))

switch (respuesta) {
    case 1:
        alert('pvto el que usó 1')
        break;
    case 2:
        alert('jorgais lo mama porque uso el 2 y lo mama 2 veces')
        break;
    case 3:
        alert('Triplejueputa maduro')
        break;
    default:
        alert('Dato Erroneo')
        break;
} */

// un programa que en base al numero del usuario, le muestre el mes [hasta Julio]

/* let respuesta = prompt('ingrese el nombre del mes actual')

switch (respuesta.toLowerCase()) {
    case 'enero':
        alert('Mes 1')
        break;

    case 'febrero':
        alert('Mes 2')
        break;

    case 'marzo':
        alert('Mes 3')
        break;

    case 'abril':
        alert('mes 4')
        break;

    case 'mayo':
        alert('Mes 5')
        break;

    case 'junio':
        alert('Mes 6')
        break;

    case 'julio':
        alert('Mes 7')
           break;

    default:
        alert('Dato Erroneo.')
        break;
} */

// estudiante, 3 notas, que calcule el promedio, alertar si es bueno, medio, malo [entre 0 a 20 como nota]
// para calcular el promedio se suman las 3 notas y se divide entre el numero de ellas (3)

/* let nota1 = parseInt(prompt('Ingrese su nota en primer lapso'))
let nota2 = parseInt(prompt('Ingrese su nota en segundo lapso'))
let nota3 = parseInt(prompt('Ingrese su nota en tercer lapso'))
let promedio = (nota1 + nota2 + nota3)/3;

if (promedio<11) {
    alert('Su nota total está por debajo del promedio necesario.')
} else if (promedio>=11 && promedio<17) {
    alert('Su nota total está en el indice necesario del promedio.')
} else if (promedio>17) {
    console.log(promedio)
    alert('Su nota total excíme el promedio necesario.')
} else {
    alert('Dato Erroneo.')
} */

// [PRUEBA DE STRINGS] limpiar los espacios de un texto.

// quiz 1
let texto = ' re-contra marico el que se buguee   '
console.log(texto.trim())

// quiz 2

// TERNARIOS //

texto ? console.log(texto) : console.log('no existe esta chingada') // esto es un operador ternario que es igual a:

if(texto){
    console.log(texto)
} else {
    console.log('no existe esta chingada')
} // el ternario es igual a eso solo que comprimido para optimizar memoria.