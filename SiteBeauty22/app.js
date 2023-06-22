const btnMenu = document.querySelector('.logo-menu');

const menu = document.querySelector('.liste-nav');

btnMenu.addEventListener('click', () => {
    menu.classList.toggle('active')
})

const alllinks = document.querySelectorAll('.item-nav');

alllinks.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.toggle('active')
    })
})