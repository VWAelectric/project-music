const dropdown = document.querySelector('.dropdown')
const dropdownContent = document.querySelector('.dropdown-content')
const box = document.querySelector('.slider')
const zoom = document.querySelector('.zoom-text')


/**Slider Show
 * Aqui foi criado um contador iniciado em 0, após isto foi criado uma função com o nome "slider"
 * que recebeu o contador, que a cada slide ele acrescenta mais um, com uma condicional, quando 
 * a contagem for maior igual 5 (nesse caso porque tem 5 imagens),a contagem volta para a posição 
 * inicial fazendo com volte a ser exibido o slide 1. Feito isso, foi incrementado um tempo para
 * a mudança dos slides a cada 4 segundos.
 */
let conter = 0;

function slider() {
    conter++;

    if(conter >= 5) {
       conter = 0; 
    }

    box.style.transform = `translateX(${-conter*800}px)`;
}

setInterval(slider, 4000);

/**Esta parte é responsável por abrio o menu dropdown ao passar o mouse sobre o menu "Cursos" */

dropdown.addEventListener('mouseover', () => {
    dropdownContent.classList.add('show');
})

dropdown.addEventListener('mouseout', () => {
    dropdownContent.classList.remove('show');
})

/**Zoom dos títulos 
 * Esclarecer com o professor o que pode ser feito para que o zoom seja válido para todos os títulos.
 * Obs: tentei adicionar a mesma class aos outros títulos, mas quando isso é feito o que estava funcinando 
 * para de funcionar. O que pode ser?
*/

zoom.addEventListener('mouseover', () => {
zoom.classList.add('zoom-in')
})

zoom.addEventListener('mouseout', () => {
zoom.classList.remove('zoom-in')
})

/**Texto  em estilo máquina de escrever */

function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('')
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){   
      
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 75 * i)

  });
}
const titulo = document.querySelector('.text-sobre')
typeWrite(titulo);

/**Rotate com a class css
 * Nessa parte, depois de ter esclarecido o que poderia estar errado no código para que funcinasse da 
 * maneira desejada (resolvido em aula, tudo funcionou da maneira correta, porém o professor ficou de 
 * orientar uma maneira mais simples com um código mais limpo para o mesmo resultado. A dica foi que 
 * isso seria feiro no css. Cobrar o professor.  
 */

const img1 = document.getElementById('evolution1')
const img2 = document.getElementById('evolution2')
const img3 = document.getElementById('evolution3')
const img4 = document.getElementById('evolution4')

img1.addEventListener('mouseenter', () => {
    img1.classList.add('rotating')
})
img1.addEventListener('mouseleave', () => {
    img1.classList.remove('rotating')
})


img2.addEventListener('mouseover', () => {
    img2.classList.add('rota')
})
img2.addEventListener('mouseout', () => {
    img2.classList.remove('rota')
})

img3.addEventListener('mouseover', () => {
    img3.classList.add('rotating')
})
img3.addEventListener('mouseout', () => {
    img3.classList.remove('rotating')
})

img4.addEventListener('mouseover', () => {
    img4.classList.add('rota')
})
img4.addEventListener('mouseout', () => {
    img4.classList.remove('rota')
})