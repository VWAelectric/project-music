const dropdown = document.querySelector('.dropdown');
const dropdownContent = document.querySelector('.dropdown-content');
const box = document.querySelector(".slider")
const image = document.querySelector(".slider img")

let conter = 0;

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
});

dropdown.addEventListener('mouseout', () => {
    dropdownContent.classList.remove('show');
});
