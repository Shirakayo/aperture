const burgerMenu = document.querySelector('.header__burger'),
        nav = document.querySelector('.header__nav-items'),
        line = document.querySelectorAll('.header__nav-items li')

function slider() {
    burgerMenu.addEventListener('click', () => {

        nav.classList.toggle('nav-active')

        burgerMenu.classList.toggle('toggle')

        line.forEach((link, index) => {
            if (line.style.animation) {
                line.style.animation = ''
            } else {
                line.style.animation = `navLinksFade .5s ease forwards ${index/7 + 0.3}s`
            }
        })
    })
}

slider();