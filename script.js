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


function btnOnClick(){
    console.log(Number(input1.value) + Number(input2.value));// a ver, si solo ponemos los input, lo que hara js es que tomara como si fueran strings
    // por lo tanto cocatenara los valores que nos ah traido, sin embargo nosotros sabemos que son numeros, por lo tanto le pedimos que los convierta
    // o los declaramos como numericos con ayuda de la funcion "number"
    

    // la siguiente seria la forma de regresa o que pinte algo en html desde js
    const sumaInputs =  input1.value + input2.value;
    resultado.innerText = "resultado:" + sumaInputs;
}