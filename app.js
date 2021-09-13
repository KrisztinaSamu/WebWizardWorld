const menu = document.querySelector('.menu');
const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show() {
    menu.style.display='flex';
    menu.style.top='0';
    menu.style.right='0';
}

function close() {
    menu.style.top='-100%';
}
