const dropdown = document.querySelector('.dropdown')
const dropdownContent = document.querySelector('.dropdown-content')
const box = document.querySelector('.slider')
const zoom = document.querySelector('.zoom-text')

let conter = 0;

function rotacionar() {
    angle += 45;
}

function slider() {
    conter++;

    if(conter >= 5) {
       conter = 0; 
    }

    box.style.transform = `translateX(${-conter*800}px)`;
}

setInterval(slider, 4000);

dropdown.addEventListener('mouseover', () => {
    dropdownContent.classList.add('show');
})

dropdown.addEventListener('mouseout', () => {
    dropdownContent.classList.remove('show');
})

zoom.addEventListener('mouseover', () => {
zoom.classList.add('small')
})

zoom.addEventListener('mouseout', () => {
zoom.classList.remove('small')
})

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

//Rotate com a class css

const img = document.getElementById('evolution1')
const image = document.getElementById('evolution2')

img.addEventListener('mouseenter', () => {
    img.classList.add('rotating')
})
img.addEventListener('mouseleave', () => {
    img.classList.remove('rotating')
})

image.addEventListener('mouseover', () => {
    img.classList.add('rota')
})
image.addEventListener('mouseout', () => {
    img.classList.remove('rota')
})