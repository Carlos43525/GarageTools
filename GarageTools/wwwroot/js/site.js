const sideBarClose = document.getElementById('sideBarClose');
const sideBarOpen = document.getElementById('sideBarOpen');
const sideBar = document.getElementById('sideBar');

sideBarOpen.addEventListener('click', () => {
    sideBar.classList.toggle('-translate-x-full');
    sideBar.classList.add('translate-x-0');
})

sideBarClose.addEventListener('click', () => {
    sideBar.classList.remove('translate-x-0');
    sideBar.classList.toggle('-translate-x-full');
})


//document.addEventListener('DOMContentLoaded', function () {
//    var splide = new Splide('.splide', {
//        classes: {
//            arrows: 'splide__arrows',
//            arrow: 'splide__arrow',
//            prev: 'splide__arrow--prev',
//            next: 'splide__arrow--next',
//        },
//        type: 'loop',

//    });
//    splide.mount();
//});