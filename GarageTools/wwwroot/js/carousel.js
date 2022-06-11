// Splide carousel for product details

document.addEventListener('DOMContentLoaded', function () {
    let main = new Splide('#main-carousel', {
        fixedWidth: 300,
        fixedHeight: 300,
        type: 'fade',
        rewind: true,
        pagination: false,
        arrows: false,
    });

    let thumbnails = new Splide('#product-detail-carousel', {
        fixedWidth: 100,
        fixedHeight: 100,
        gap: 10,
        rewind: true,
        pagination: false,
        isNavigation: true,
        focus: 'center',
        arrows: false,
        breakpoints: {
            640: {
                fixedWidth: 100,
                fixedHeight: 100,
            },
        },
    });

    main.sync(thumbnails);
    main.mount();
    thumbnails.mount();
});