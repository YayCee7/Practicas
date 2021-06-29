// log de consola: esto te ayuda a mostrar mensajes en cosola.

/* console.log("IDK")
console.log("XD")
console.log("COOL")
console.log('HELLO')
console.log('WORLD')
console.log(2)*/ //se pueden dejar sms, numeros, ecuaciones y variables.

let lorem = 'lorem ipsum dolor sit amet.zz';

document.write(lorem);
//Con Document y write escribimos lo que alamecenemos en la variable y se muestra en la pagina.


// ALERTA para el usuario //

alert('Bienvenido a mi test de js');
console.log('Bienvenido a mi test de js');

/*let cajita = 'ñapato'; // variable tipo: texto.
cajita = 2+2;

let gumball = cajita;

console.log(gumball);*/


// Operaciones Matemáticas. //

/* console.log('>>operaciones matematicas<<');

let num1 = 23;
let num2 = 7;
let num3 = -45;
let resultado = num1+num2;
resultado = num2.concat(num3); //concat nos siver para concatenar los operadores con strings

console.log(resultado);
console.log(num1-num2);
console.log(num1*num3);
console.log(num1/num2);
console.log(num1%num3); */


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
console.log(--b);} */


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
// IMPORTANTE solo usar tildes inversos `` (o Backticks) para concatenar usando ${}.


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


// OPERADORES LOGICOS //
// solo trabajan con true o false (valores Boleanos).
// && and , || o //

if(con>0 && sin>0){
    console.log(`${con} y ${sin} son mayores que 0`); */

// =! --> (Not) 
// && --> (and) todas las condiciones deben cumplirse para true.
// || --> (or) cualquiera debe cumplirse pero no obligatoriamente todas para ser true.
// !  --> convierte el valor boleano en lo contrario.

/* bombillo */

/* let pos = false
let negativo = false

if (pos || negativo){
    alert('Enciende')
}else {
    alert('DOPE')
} */


// OPERADORES de COMPARACION //
// Igualdad ==, Identidad Estricta ===, Inigualdad !=, !== Diferente Estricto
// ==, === --> preguntas si son iguales
// == --> si es igual pero no es estricto (si lo que estamos comparando es del mismo tipo)
// Mayor que >=, Menor que <=.

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
/* let texto = ' re-contra marico el que se buguee   '
console.log(texto.trim()) */


// TERNARIOS //

/* texto ? console.log(texto) : console.log('no existe esta chingada') // esto es un operador ternario que es igual a:

if(texto){
    console.log(texto)
} else {
    console.log('no existe esta chingada')
} */ // el ternario es igual a eso solo que comprimido para optimizar memoria. // requieren obligatoriamente un else


// BUCLES [While] //

/*let numerico = 100
let divisor = 2
let resultado = numerico

 while (numerico<=100) {
    console.log(numerico)
    numerico++
} */

/* while (numerico<=10) {
    console.log(numerico*multiplicador)
    numerico++ // numerico + 1 = 2
} */

// toma 100 y dividelo entre 2 hasta que ya no se pueda dividir (y liga que no explote).

/* while (resultado!=1) {
    resultado = Math.round(resultado/divisor) //"Math" es una clase de objetos matematicos y ".round" es para redondear.
    console.log(resultado)
} */

// bucle con break //

/* let B = 0

while (B < 100) {
    B++
    console.log(B)
    if (B == 10){
    break
    }
} */

// do while //

/* let obj = 1
let palabra = "CUACK"

 do {
    objeto === "BOMBILLO" ? sw = false : sw = true
    console.log('Inicializado')
} while (sw) */

/* do {
    console.log(palabra)
    obj++
} while (obj<=4); */


// Array I //

// let listado = ['patata','pito','suafonson','holis','dani','julle','pvtanegra'] // acceder a un elemento de la lista es lista[numeroIndice]

// for: es un bucle para ejecutarse tantas veces como le indiquemos (tambien en listas).

/* for (crear un indice; condicion; incremento del indice){
    ejecutame esto
} */

// Ejemplo de for //

/* for (const i = 0; i < 6; i++){ // esta condicion se cumplirá tantas veces como le indiquemos.
    console.log(i)
} */ 

// console.log(listado)
/* for (let i=listado.length; i>0; i--){
    console.log(listado[index])
} */

/* for ( elemento of listado ){
    console.log(elemento)
} */ // simplificado de un Array. of trabaja con el valor de cada indice, osea el elemento.

/* for ( elemento in listado) {
    console.log(elemento)
}  */ // con in te mostrara el indice de cada elemento.
                // 0            1           2
/* let input = ['test@test.com', 'a@a.a', 'danitequiero@suanfonson.com', 'julle@dicksuck.org', 'gayculebra@picado.julle']
 */
// El dueño del Cyber quiere saber el correo de sus usuarios y su numero (tomando en cuenta el 0 en adelante)

/* console.log(input)

for ( item in input ){
    console.log(item)
} // in para el busqueda del numero del indice.

for ( item of input ) {
    console.log(item)
} // of busqueda del elemento. */

 // input.map((el, index) => console.log(`${index} = ${el}`))


// Function: es una funcion independiente. // 

function suma(num1, num2) {
    return console.log(num1+num2)
}

const suma2 = (num1,num2) => num1+num2

/* suma(2,2)
suma(4,5)
suma(6,6) */

// console.log(suma2(2,2))

let nombresLista = []

nombresLista.push('Julio')
nombresLista.push(24)
nombresLista.push('dna@axt.com')
nombresLista.push(2+2)
nombresLista.push('https//:m.facebook.com/')
nombresLista.push('OhShita@cucrouch.nig')
nombresLista.push('Jorgais')
nombresLista.push('Marico el que se bugguee')
nombresLista.push('IDK')

// nombresLista.pop() //para borrar el ultimo

/* let indiceBorrar = prompt('seleccione el elementeo a borrar')
let cantidad= prompt('seleccione cuantos elementos quiere borrar min: 1') */

// nombresLista.splice(indiceBorrar, cantidad) //para borrar desde el indice seleccionado

/* for ( item of nombresLista ) {
    console.log(item)
} */


// FUNCIONES // 

// Guarda diversos elementos en una lista y luego muestramelos por pantalla

let arrayNapato = ['C', 'MAMUTH', 'TIO', 'OSTIA', 'HACIENDA']

function borrarArray(arr, index, cantidad) {
    arr.splice(index, cantidad)
    return arr
}

console.log(borrarArray)

// console.log(borrarArray(arrayNapato, 3, 2))

// arrayNapato.map(function (el) { return console.log(el) })

let STATUS = [
    'ACTIVO', // 0
    'PENDIENTE', // 1
    'PRENOTIFICADO', // 2
    'FALLIDO', // 3
    'CANCELADO' // 4
]

function info(index) {
    return STATUS[index - 1]
}

/* console.log(info(3)) */

let vehiculo = 'Lamborghini LP-700 2010' // .split(' ') --> array
let separado = vehiculo.split(' ')

/* console.log(separado) */

let marca = separado[0]
let modelo = separado[1]
let year = separado[2]

//console.log(`La marca de tu vehiculo es un ${marca} modelo ${modelo} del año ${year}.`)

/* let precios = ["35.21$", "100.30$", '99.99$', "9.49$"]

const currency = ( prices ) => {
    return prices.map( price => {
            const splitted = price.split('.')
            const dollars = Number(splitted[0])
            const cents = parseInt(splitted[1].slice(0, -1))
            const curren = splitted[1].slice(2) === '$' ? 'Dolares' : null
            
            return `El Precio es: ${dollars} ${curren} con ${cents} centavos`
    })
}

console.log(currency(precios)) */

/* me harás una función que reciba un numero cualquiera
y que me muestre por consola todos los numeros desde ese numero hasta el 0 */

/* let xy = prompt("ingrese un numero del 1 al 100")
xy = parseInt(xy)

function negativeCounter(xy) {
    while (xy >= 0) {
        console.log(xy)
        xy--
    }
    return 'Ejecucion con exito'
}

console.log(negativeCounter(xy)) */

function saludo(frase) {
    let frase = prompt(`buen dia, coloca tu nombre: ${nombre}`)
    return alert(`hola ${nombre} espero tengas un buen dia`)
}