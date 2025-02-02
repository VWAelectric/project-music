const dropdown = document.querySelector('.dropdown')
const dropdownContent = document.querySelector('.dropdown-content')

dropdown.addEventListener('mouseover', () => {
    dropdownContent.classList.add('show')
}) 

dropdown.addEventListener('mouseout', () => {
    dropdownContent.classList.remove('show')
}) 