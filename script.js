/** para mandara a traer los valore que nosotros o los usuarios de una pagina html
 * vallan introduciendo podemos hacerlo de muchas maneras usando 'document.' despues del
 * punto podemos usar muchas funciones diferentes, alomejor podemos usar getElementByid o getElementByClassName
 * o muchas otras opciones.
 *En el curso vimos como acerlo con "querySelector" que nos permite desde mandar a traer el contenido de una etiqueta
 * html o mediante el nombde de la clase del elemento que queremos traer, asi como el id o todos los que tengan 'x' etiqueta
 * 'querySelector' es mas comodo porque no tenemos que poner si lo queremos por calssName o por ID, asi que pues tenemos
 * una opcion que si queremos podemos usar o si no queremos pues podemos usar otra
 * por eso no hay problemas alguno.
 */
const h1 = document.querySelector('h1');//esta funcion nos permite selecionar elemementos por el nombde de las etiquetas html
const input1 = document.querySelector('#calculo1');//colocamos el # porque estamos seleccionando ids
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const resultado =  document.querySelector('#result')
const form = document.querySelector('#formulario')

// form.addEventListener('submit',sumarInputValues);/** esta funcion es un escuchador de eventos, escucha cada vez que sucede cierto evento, y cada que pasa ejectuta cierta funcion de js
// esta funcion primero pide que le digamos que evento es el que escuhara, despues tendremos que ponerlo lo que va a hacer, en este caso le decimos que ejecute una funcion
// pero ahi solo debemos de poner el nombre de la funcion, sin los parentesis, de lo contrario no ejectura la funcion que nosotros creamos en js
// */

// function sumarInputValues(event){
//     event.preventDefault();/** Como colocamos los inputs y botonoes dentro de un formulario html, teniamos el problema de que siempre el formulario hacia que
//     la pagina se refrescara, de tal forma que no pudiesemos ver la ejecucion de nuesta pagina, enotnces para evitar esto tenemos que usar la propiedadd event,
//     y a su vez una de sus funciones que es "preventDefault()" esta funcion hace que la pagina ya no se recargue por culpa del formulario  */
//     console.log(Number(input1.value) + Number(input2.value));// a ver, si solo ponemos los input, lo que hara js es que tomara como si fueran strings
//     // por lo tanto cocatenara los valores que nos ah traido, sin embargo nosotros sabemos que son numeros, por lo tanto le pedimos que los convierta
//     // o los declaramos como numericos con ayuda de la funcion "number"
    

//     // la siguiente seria la forma de regresa o que pinte algo en html desde js
//     const sumaInputs =  input1.value + input2.value;
//     resultado.innerText = "resultado:" + sumaInputs;
// }

/** ******************OTRA FORMA DE SULUCIONAR ESTE PROBLEMA SERIA DE LA SIGUIENTE MANERA
 */

 btn.addEventListener('click',sumarInputValues);/** esta funcion es un escuchador de eventos, escucha cada vez que sucede cierto evento, y cada que pasa ejectuta cierta funcion de js
 esta funcion primero pide que le digamos que evento es el que escuhara, despues tendremos que ponerlo lo que va a hacer, en este caso le decimos que ejecute una funcion
 pero ahi solo debemos de poner el nombre de la funcion, sin los parentesis, de lo contrario no ejectura la funcion que nosotros creamos en js
 */
 
 function sumarInputValues(event){
     //event.preventDefault();
     /** Como colocamos los inputs y botonoes dentro de un formulario html, teniamos el problema de que siempre el formulario hacia que
     la pagina se refrescara, de tal forma que no pudiesemos ver la ejecucion de nuesta pagina, enotnces para evitar esto tenemos que usar la propiedadd event,
     y a su vez una de sus funciones que es "preventDefault()" esta funcion hace que la pagina ya no se recargue por culpa del formulario  */
     console.log(Number(input1.value) + Number(input2.value));// a ver, si solo ponemos los input, lo que hara js es que tomara como si fueran strings
     // por lo tanto cocatenara los valores que nos ah traido, sin embargo nosotros sabemos que son numeros, por lo tanto le pedimos que los convierta
     // o los declaramos como numericos con ayuda de la funcion "number"
     
 
     // la siguiente seria la forma de regresa o que pinte algo en html desde js
     const sumaInputs =  input1.value + input2.value;
     resultado.innerText = "resultado:" + sumaInputs;
     /** notamos que practicamente queda como originalemente lo teniamos y esque la solucion podria ser desde mi punto de vista aun mas facil
      * y seria cambiando el boton del formulario a typo "button" esto porque nosotros no le habiamos colocado el tipo al boton
      * y por default html pone de tipo "submit" a los botones de los formularios lo cual hace que la pagina se actualice cada que se preciona el boton
      * 
      * Yo usaria "submit" cuando quiera mandar un formulario como  de un registro a algo importante a una base de datos, pero usaria "button" cuando
      * un formulario se utilizara unicamente para como una cosunlta sobre algo rapido o com un jueguito
      */
 }