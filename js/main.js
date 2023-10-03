// slide slick

$('.your-class').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
});
$('.news-image').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
});
//slide2
$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    appendDots: $('.slick-slider-dots'),
    autoplay: true,
    dots: true,
    appendArrows: $('.slick-slider-nav'),
    appendDots: $('.slick-slider-dots'),
    prevArrow: "<button class='slick-prev btn btn-white rounded-circle'><i class='mdi mdi-chevron-left'></i></button>",
    nextArrow: "<button class='slick-next btn btn-white rounded-circle'><i class='mdi mdi-chevron-right'></i></button>",
});
//select2
$(document).ready(function () {
    $('.js-example-basic-single').select2();
});

//slide bootstrap
$('.carousel').carousel({
    interval: 2000
})