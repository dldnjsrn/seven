$(function () {
    var productsSwiper = new Swiper(".products-swiper", {
        slidesPerView: 3.5,
        spaceBetween: 20,
        // centeredSlides: true,
        // freeMode: true,
        // pauseOnHover: true,

        breakpoints: {
            1024: { slidesPerView: 2.5 },
        },

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            type: "progressbar",
        },

        navigation: {
            nextEl: ".button-next",
            prevEl: ".button-prev",
        },
    });
});
