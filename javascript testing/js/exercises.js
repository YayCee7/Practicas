function saludo(frase) {
    let frase = prompt(`buen dia, coloca tu nombre: ${nombre}`)
    return alert(`hola ${nombre} espero tengas un buen dia`)
}

saludo()

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

// EJERCICIO de manejo de split //

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

// COFLA EP1 //

/* let dineroCofla = prompt("¿De cuanto dinero dispones para comprar, Cofla?");
let dineroRoberto = prompt("¿De cuanto dinero dispones para comprar, Roberto?");
let dineroPedro = prompt("¿De cuanto dinero dispones para comprar, Pedro?");

dineroCofla = parseInt(dineroCofla);
dineroRoberto = parseInt(dineroRoberto);
dineroPedro = parseInt(dineroPedro);

if (dineroCofla >= 0.6 && dineroCofla < 1) {
    alert("Cofla, comprate el helado citrico");
    alert("y te sobran" + (dineroCofla - 1));
} else if (dineroCofla >= 1 && dineroCofla < 1.6) {
    alert("Cofla, comprate el helado cremoso");
    alert("y te sobran" + (dineroCofla - 1.6));
} else if (dineroCofla >= 1.6 && dineroCofla < 1.8) {
    alert("Cofla, comprate el helado Magnum");
    alert("y te sobran" + (dineroCofla - 1.8));
} else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
    alert("Cofla, comprate el helado Tody");
    alert("y te sobran" + (dineroCofla - 2.9));
} else if (dineroCofla >= 2.9) {
    alert("Cofla, comprate el helado Napolitano");
    alert("y te sobran" + (dineroCofla - 2.9));
} else {
    alert("Lo siento Cofla pero no te puedes comprar nada, andate a la concha de la lora")
}

if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
    alert("Roberto, comprate el helado citrico");
    alert("y te sobran" + (dineroRoberto - 1));
} else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
    alert("Roberto, comprate el helado cremoso");
    alert("y te sobran" + (dineroRoberto - 1.6));
} else if (dineroRoberto >= 1.6 && dineroRoberto < 1.8) {
    alert("Roberto, comprate el helado Magnum");
    alert("y te sobran" + (dineroRoberto - 1.8));
} else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
    alert("Roberto, comprate el helado Tody");
    alert("y te sobran" + (dineroRoberto - 2.9));
} else if (dineroRoberto >= 2.9) {
    alert("Roberto, comprate el helado Napolitano");
    alert("y te sobran" + (dineroRoberto - 2.9));
} else {
    alert("Lo siento Roberto pero no te puedes comprar nada, andate a la concha de la lora")
}

if (dineroPedro >= 0.6 && dineroPedro < 1) {
    alert("Pedro, comprate el helado citrico");
    alert("y te sobran" + (dineroPedro - 1));
} else if (dineroPedro >= 1 && dineroPedro < 1.6) {
    alert("Pedro, comprate el helado cremoso");
    alert("y te sobran" + (dineroPedro - 1.6));
} else if (dineroPedro >= 1.6 && dineroPedro < 1.8) {
    alert("Pedro, comprate el helado Magnum");
    alert("y te sobran" + (dineroPedro - 1.8));
} else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
    alert("Pedro, comprate el helado Tody");
    alert("y te sobran" + (dineroPedro - 2.9));
} else if (dineroPedro >= 2.9) {
    alert("Pedro, comprate el helado Napolitano");
    alert("y te sobran" + (dineroPedro - 2.9));
} else {
    alert("Lo siento Pedro pero no te puedes comprar nada, andate a la concha de la lora")
} */

// EJERCICIOS CON EL DAN //


/*function expMath() {
    for (let i = input; i > 0; i--) {
        console.log(i[0])
    }                    
} */

// Pidele al usuario su nombre y saludale con "buenos dias fulano" //

/* let saludoAlUsuario = prompt("hola, dinos tu nombre") 
console.log(saludoAlUsuario)

alert("Buen dia "+saludoAlUsuario)

// Haz un Array con 10 nombres y muestralos en consola //

let list = ['Alan Brito Delgado', 'Keca Galindo', 'Elsa Podiondo', 'Sole Dolio', 'Armando Casas', 'Jorge Nitales', 'Jose Luis Lamata Feliz', 'Marcia Ana', 'Sevelinda Parada', 'Aquiles Castro']

console.log(list)

// Pidele al usuario 10 nombres y guardalos en un Array //

alert('Ahora, por favor introduzca 10 nombres para la lista')

let nameList = []

nameList.push(prompt(1))
nameList.push(prompt(2))
nameList.push(prompt(3))
nameList.push(prompt(4))
nameList.push(prompt(5))
nameList.push(prompt(6))
nameList.push(prompt(7))
nameList.push(prompt(8))
nameList.push(prompt(9))
nameList.push(prompt(10))

for ( item of nameList ) {
    console.log(item)
} */

// hacer una funcion que calcule el tamaño de un cuadrado o rectangulo usando base * altura
/* let A = 4
let B = 6

function squaretangle(A, B) {
    square = A*B
    console.log(square)
}*/

// test de bucles //

/* let N = 0

while(N < 10){
    N++
    console.log(N)
    if(N == 9)
    break
} */

const dias=["lunes",
"martes",
"miercoles",
"jueves",
"viernes",
"sabado",
"domingo",
]

/* function inicio(dias, semana) {
    for(i=0; i<=5; i++){
    dias = semana
    }
    return console.log(semana[i])
} */

let any = 0

let other = 200

other = "tres cientos"

any = other 

any.split(" ")

console.log(any.split(" "))

let anyArray = any.split(" ")

console.log(anyArray[1])

function week(number) {
    const dias=["lunes",
    "martes",
    "miercoles",
    "jueves",
    "viernes",
    "sabado",
    "domingo",
    ]
    return console.log(dias[number -1]) // admite usar ecuaciones de suma y resta
}

// week(1)

const listaDeAutos = () => {
    const autos = ["Evo - 300cv", "supra - 330cv", "skyline - 335cv", "mx5 - 150cv", "nsx - 325cv"]
    for (auto of autos){
        let datos = auto.split(" - ")
        console.log(`Nombre: ${datos[0]}, Potencia: ${datos[1]}`)
    }
}

// listaDeAutos()

const intercambio = (number) => {
    switch (number) {
        case 1: 
            console.log("Esto es el caso 1")
            break;
        case 2:
            console.log("Esto es el caso 2")
            break
        case 3:
            console.log("Esto es el caso 3")
            break

        default:
            console.log("Parametro no valido")
            break;
    }
}

// intercambio(5)

const ecuacion = (exp) => { // 2+1
    let separado = exp.split('')
    let num1 = parseInt(separado[0])
    let symbol = separado[1]
    let num2 = parseInt(separado[2])

    switch (symbol) {
        case "+":
            console.log(num1 + num2)
            break;
        case "-":
            console.log(num1 - num2)
            break;
        case "*":
            console.log(num1 * num2)
            break;
        case "/":
            console.log(num1 / num2)
            break;
        default:
            console.log("Ecuación invalida")
            break;
    }
}

// ecuacion("5*5")

/* harás una función, que reciba como argumento un array de expresiones matemáticas
 en texto e imprime por pantalla las soluciones */

const input = ['3+2', '5*8', '9/9', '8-4']

/*const resultados = (exp) => {
    let res = []

    for (data of exp){
        let separado = data.split('')
        let num1 = parseInt(separado[0])
        let num2 = parseInt(separado[2])
        let symbol = separado[1]

        switch (symbol) {
            case "+":
                console.log(num1 + num2)
                res.push(num1 + num2)
                break;
            case "-":
                console.log(num1 - num2)
                res.push(num1 - num2)
                break;
            case "*":
                console.log(num1 * num2)
                res.push(num1 * num2)
                break;
            case "/":
                console.log(num1 / num2)
                res.push(num1 / num2)
                break;
            default:
                console.log("Ecuación invalida")
                break;
        }
    }
 return res
} */

// console.log(resultados(input)[3])

// Callback's tipo I: una funcion que llama a otra funcion.
//    =       tipo II: funcion que recibe una funcion anonima como argumento.

const resultados = (exp) => {
exp.map((element,index) => {
    ecuacion(element)
}) // funcion anonima (crea automaticamente un array)

/*  for (data of exp){
     ecuacion(data)
    } */ //tipo funcion normal

/*  exp.forEach(element => {
        ecuacion(element)
    }); */ //es igual a map pero solo trabajamos con el elemento
}

// resultados(input)

const users = ["darkie", "julle", "julio"]
const numbers = [2, 4, 6, 9]

// forEach: este es como el for normal, par hacer cambios sin alamacenarlo en la variable.

users.forEach(loc => {
    console.log(loc)
})

// map: en este tambien hace el recorrido como for solo que podemos almacenar el resultado en la variable.

users.map(loc => {
    console.log(loc)
})

