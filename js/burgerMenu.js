const burgerMenu = document.querySelector('.header__burger'),
    nav = document.querySelector('.nav'),
    navItems = document.querySelectorAll('.nav__bar a');

burgerMenu.addEventListener('click', () => {
    if(burgerMenu.classList.toggle('active')){
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
})

navItems.forEach(item => {
    item.addEventListener('click', () => {
        if(burgerMenu.classList.contains('active')){
            nav.classList.remove('active');
            burgerMenu.classList.remove('active');
        }
    })
})