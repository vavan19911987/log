window.addEventListener('DOMContentLoaded', function () {
    "user strict";
    const swiper = new Swiper('.swiper', {
        loop: true,
        // spaceBetween: 130,
        autoplay: {
            delay: 2000,
        },
        speed: 500,
        slidesPwgGroup: 1,
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
        slidesPerView: 1,

    });

});

