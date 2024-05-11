// top button fix js
// $(document).ready(function () {
$(window).scroll(function () {
    if (scrollY > 200) {
        $('.up-arrow').removeClass('d-none');
    }
    else {
        $('.up-arrow').addClass('d-none');
    }
});
// });

// header fix js
var lastScrollTop = 0;
$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll > 300) {
        $(".header-area.header-sticky").addClass("sticky");
        $(".header-area.header-sticky").removeClass("sticky-out");
    } else if (scroll < lastScrollTop) {
        if (scroll < 500) {
            $(".header-area.header-sticky").addClass("sticky-out");
            $(".header-area.header-sticky").removeClass("sticky");
        }
    } else {
        $(".header-area.header-sticky").removeClass("sticky");
    }

    lastScrollTop = scroll;
});


// slick slider js
$(document).ready(function () {
    $('.reviews-items').slick({
        infinite: true,
        dots: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

});

