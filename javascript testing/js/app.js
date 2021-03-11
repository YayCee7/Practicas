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

let con = -9;
let sin = 2;

/* if(con>0){
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
} */

// Operadores Logicos //


// && and , || o //

if(con>0 || sin>0){
    console.log('${con} y ${sin} son mayores que 0');
}

