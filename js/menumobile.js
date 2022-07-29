let cont = 1
const imgmenu = document.querySelector('.img-hamburguer')
const menumobile = document.querySelector('.mobile-menu-sp')
imgmenu.addEventListener('click', function () {
    ++cont
    if (cont % 2 == 0) {
        imgmenu.src = ("./images/icon-close-menu.svg")
        menumobile.classList.add('flex-propriedade')
    } else {
        imgmenu.src = ("./images/icon-hamburger.svg")
        menumobile.classList.remove('flex-propriedade')
    }

})