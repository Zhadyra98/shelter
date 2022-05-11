(function () {
    const burgerItem = document.querySelector('.header_burger');
    const menu = document.querySelector('.header__nav');
    const menuCloseItem = document.querySelector('.header_nav_close');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__nav_active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header__nav_active');
    });
}());