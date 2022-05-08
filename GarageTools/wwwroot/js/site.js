const sideBarClose = document.getElementById('sideBarClose');
const sideBarOpen = document.getElementById('sideBarOpen');
const sideBar = document.getElementById('sideBar');

// Mobile nav/sidebar open close handlers
sideBarOpen.addEventListener('click', () => {
    sideBar.classList.toggle('-translate-x-full');
    sideBar.classList.add('translate-x-0');
})

sideBarClose.addEventListener('click', () => {
    sideBar.classList.remove('translate-x-0');
    sideBar.classList.toggle('-translate-x-full');
})

document.addEventListener('DOMContentLoaded', function () {
    new Splide('#image-carousel', {
        type: 'loop',
        autoplay: true,
        interval: 10000,
        speed: 400,
        pagination: false,
    }).mount();
});