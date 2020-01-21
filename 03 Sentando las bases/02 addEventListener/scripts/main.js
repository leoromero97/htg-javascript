'use strict';

const formulario = document.querySelector('#contacto');
const inputNombre = document.querySelector('#input-nombre');
const personx = document.querySelector('#listaPersonx');
const comentarioSelecionado = document.querySelector ('#input-solucion');
let nombre = event.target.value;


function recibirNombre(event) {
  event.preventDefault(); //esta ahi para que cuando se envie no se recargue la pagina
  console.log(event);
  alert ('el formulario se ha enviado correctamente');
  let elementoP = document.createElement ('p');
  elementoP.textContent = nombre + ': ' + comentarioSelecionado.value;
  personx.appendChild(elementoP);  
}

function interceptarNombre(event) {
  console.log(event.target.value); //me imprime por consola una entrada de texto digito por digito
  if (event.target.value.length < 4 || event.target.value.length > 50)  {
    alert ('El nombre debe ser entre 5 y 50 caracteres')
  }
}

formulario.addEventListener('submit', recibirNombre);
inputNombre.addEventListener('input', interceptarNombre);
//event es el parametro que utiliza la funcion. target seria el objetivo del evento
//addEventLisetner hacer que esa etiqueta del html escuche un evento, y el tipo de funcion input o sumit, y despues llama a la funcion