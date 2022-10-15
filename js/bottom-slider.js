$(".bottom-slider").slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:'<button type="button" class="slick-arrow slick-next"><img src="./img/next-arrow.svg" alt="arrow next"></button>',
    prevArrow:'<button type="button" class="slick-arrow slick-prev"><img src="./img/prev-arrow.svg" alt="arrow prev"></button>',
    responsive: [
    {
        breakpoint: 3000,
        settings: {
            arrows: false
        },
    },
    {
        breakpoint: 640,
        settings: {
            arrows: false
        },
    },
    ],
});