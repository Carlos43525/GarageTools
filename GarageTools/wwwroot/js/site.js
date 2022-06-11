const sideBarOpen = document.getElementById('sideBarOpen');
const sideBarClose = document.getElementById('sideBarClose');
const sideBar = document.getElementById('sideBar');

// Mobile nav/sidebar open close handler
sideBarOpen.addEventListener('click', () => {
    sideBar.classList.toggle('-translate-x-full');
    sideBar.classList.add('translate-x-0');
})

sideBarClose.addEventListener('click', () => {
    sideBar.classList.remove('translate-x-0');
    sideBar.classList.toggle('-translate-x-full');
})

//// Index.cshtml carousel for main banner
//document.addEventListener('DOMContentLoaded', function () {
//    new Splide('#image-carousel', {
//        type: 'loop',
//        autoplay: true,
//        interval: 10000,
//        speed: 400,
//        pagination: false,
//    }).mount();
//});

//// Index.cshtml carousel for "Popular Products" section
//document.addEventListener('DOMContentLoaded', function () {
//    new Splide('#thumbnail-carousel', {
//        fixedWidth: 250,
//        fixedHeight: 250,
//        gap: 10,
//        rewind: true,
//        pagination: false,
//        focus: 'center',
//    }).mount();
//});