let comentariofav = document.querySelector('.comment');
console.log(comentariofav);
comentariofav.classList.add('comentariofav');
//variable comentariofav se guarda el selector .commet y en la tercera linea se añade otro selector nuevo con nuevos estilos.

const elementoHr = document.querySelectorAll('hr');
console.log(elementoHr);
for (let i =0;i<elementoHr.length;i++){
    
    elementoHr[i].classList.add('clasElemHr');
}
//la variable elmentoHr es un array entonces para recorrerla hay que usar un while o unn for y ahi si añadirle un estilo

/*let comentarioLargo = document.querySelectorAll('.comment--text');
console.log(comentarioLargo);
for (let contador = 0;contador < comentarioLargo.length;contador++) {
    if (comentarioLargo[contador].innerText.length > 50) {
        comentarioLargo[contador].classList.add('ocultarComen');
    }    
}*/

let comentarioSuperLargo = document.querySelectorAll('.comment--text');
console.log(comentarioSuperLargo);

let comentMax = comentarioSuperLargo[0];
    for (let indice = 1; indice < comentarioSuperLargo.length; indice++) {

        if (comentarioSuperLargo[indice].innerText.length > comentMax.innerText.length) {
            comentMax = comentarioSuperLargo[indice];   
        }
    }
    console.dir(comentMax.classList.add);
    comentMax.classList.add('comentLong');


