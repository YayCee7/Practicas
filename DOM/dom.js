/*  
    - Para acceder a cualquier elemento en la consola de inspeccion del navegador, debes seleccionar
    el elemento y luego en consola escribir $0 para mostrar su contenido -

    document.getElementById('id') - para acceder a un elemento por su id.

    document.querySelector('selectorCSS') - para acceder al primer elemento que ocoincida con el selector CSS.

    document.querySelectorAll('selectorCSS') - accede a todos los elementos que coincidan con el selector CSS
    y devuelve un nodeList.
*/

const title = document.getElementById('title')

// console.log(title)

// title.textContent = 'DOM - Acceso a nodos'

const paragraph = document.querySelector('.paragraph')
//aqui solo admite selectores CSS, no el nombre que le dimos.

// console.log(paragraph)

const span = document.getElementById('title').querySelector("span")

// console.log(span.textContent)

const paragraphs = document.querySelectorAll('paragraph')

// console.log(paragraphs)


// MODIFICAR ATRIBUTOS EN EL DOM //

/*  ATRIBUTOS:
        element.getAttribute('atributo') 
        element.getAttribute('attribute' , 'value')
    
    CLASES:
        element.classList.add('class' , 'class',...)
        element.classList.remove('class' , 'class',...)
        element.classList.contains('class')
        element.classList.replace('oldClass', newClass)
        element.classList.toggle('class'[,force])
        
    ATRIBUTOS DIRECTOS:
        id
        value
        etc...
*/

const name = document.getElementById('name')

// console.log(name.getAttribute('type')) 
// console.log(name.setAttribute('type' , 'number')) // y agregar cualquier atributo de HTML

/*title.classList.add('main-title' , 'other-title') con class añadimos, modificamos y/o removemos la clase
del elemento*/
//title-classList.remove('main-title' , 'other-title')

/* if (title.classList.contains('title')) console.log('Title contine la clase title')
else console.log('Title no contiene la clase title') */

//title.classList.replace('title' , 'main-title') // aqui removimos y agregamos mas facilmente.

console.log(title)
console.log(name)

//ACCESOS DIRETOS POR ATRIBUTOS EN EL HTML//

console.log(title.value.length) //y todos los atributos desde HTML, CSS y JS.