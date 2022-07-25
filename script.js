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
const  p = document.querySelector('.p');
const parrafito = document.getElementsByClassName('parrafito');// no tenemos que poner el "punto" que representa a una clase, solo el nomvre
const pid = document.getElementById('pid');// no tenemos que poner el # solo el nombre
const input = document.querySelector('input');

console.log(input.value);
console.log({/** de esta forma podemos imprimir el contenido de diferentes variables */
    h1,
    p,
    parrafito,
    pid,
    input,
});

h1.innerHTML= 'Patito <br> Feo';//** esta propiededa "innerHTML" de nuestros elementos nos permite modificar el html que este dentro
/** de la etiqueta, en este caso la etiqueta es 'h1', por eso se modifico el elemento a como nosotros acabomos de ponerle. */
/** no solo podemos escribir un simbre texto, si no que tambien podemos escribir etiquetas html y el navegador las respetara*
 *  si nosotros usaramos las  etiqueta  "innerText" lo que nos mostraria el h1, seria el texto tal cual que nosotros esqcriamos, ahi
 * si ya no respetara las etiquetas html que nosotros pongamos, este es la manera segura de hacerlo porque con "innetHTML" personas
 * podrias colocar codigo malicioso de una forma muy facil.
 * */
 h1.innerText= 'Patito <br> Feo';
 //** si le queremos dar una clase a  un elemento html */

 // console.log(h1.getAttribute('class'));// esta funcion nos ayuda a traer o leer el atributo de un elemento

 // h1.setAttribute('class','rojo');// de esta forma es como nosotros podemos cambiarle el atributo a una etiqueta
    //en este caso nosotros cambiamos el atributo de la clase de h1 a 'rojo'

 /** Las sigueinte funcion funciona especificamente con clases
  * 
  */
 h1.classList.add('rojo');/** con esto no solo tendra la clase por defecto que nosotros habiamos colocado en el html, ahora tambien tendra 'rojo' */
 h1.classList.remove('verde');/** con "remove" podemos quitar clases a una etiqueta, en este caso el html tenia por defecto la clase de "verde", ahora se
 la quitamos, por lo tanto solo nos arrojara la clase que jutamente acabamos de colocar arriba */
 /** **********ESTUDIAR LAS DEMAS PALABRAS RESERVADAS DE CLASSLIST******** */

/** Procederemos a MODIFICAR el valor por defecto de un "input" */
input.value = "456";// de esta forma tendra por defecto este valor que nosotros acabamos de colora
// de esta misma forma podemos modificar el placeholder o lo que nosotros queramos.


// esta funcion nos PERMITE CREAR EL ELEMENTO HTML QUE NOSOTROS QUERAMOS

console.log(document.createElement('span')); // DE esta forma solo aparece en la consola, pero esta forma es inutil
// asi seria lo adecuado
/** para hacer esto el doc html deberia de tener un elemento donde nosotros podamos crear este elemento html desde js
 * nosotros ocuparemos un parrafo que tenemos creado en el documento pero que casi no utilizamos.
 */
const img = document.createElement('img');// creamos una variable imagen ayudandonos de 'createElement'
img.setAttribute('src','https://guide-in-dubai.com/wp-content/uploads/2020/05/IMG-Worlds-of-Adventure-guide-in-dubai.jpeg');//aqui le estamos dando los atributos que puede tener una imagen
//recordemos que podemos usar los mismos atributos que html le permite usar, solo que se declaran de esta forma
pid.appendChild(img);//estamos insertando esta imagen dentro de un contenedor html, en este caso dentro de un parrafo, pero tene el id de "pid", por eso usamos ese nombre
// "appendChild" mostrara la imagen despues de contenido del parrafo
// si usaramos inner.thml, lo que haria seria borrar el contenido de html y poner lo nuevo que le estamos mandando
// ademas escribiria como tal, osea que con innerhtml no podriamos mandarle una imagen
