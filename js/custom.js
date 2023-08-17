$(function () {
    $('._fullpage').fullpage({
        anchors: ['main', 'sec1', 'sec2', 'sec3', 'foot'],
        scrollHorizontally: true,
        scrollOverflow: true,
        scrollingSpeed: 700,

        navigation: false,
        css3: false,
        responsiveWidth: 768,
        responsiveHeight: 800,

        onLeave: function (idx, nidx, dir) {
            console.log(idx, nidx)
            if (nidx == '2') {
                $('.header').addClass('on')
                $('.side').addClass('on')
            } else if (nidx == '3') {
                $('.header').addClass('on')
                $('.side').addClass('on')
            } else if (nidx == '5') {
                $('.header').addClass('on')
                $('.side').removeClass('on')
            } else {
                $('.header').removeClass('on')
                $('.side').removeClass('on')
            }
            $('.side_nav li').eq(nidx - 1).addClass('on').siblings().removeClass('on');
        }


    });

    $('.main_slide').on('init afterChange', function (e, s, c) {
        const current = $('.main_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');

        $('.mv_slidenum li').eq(0).addClass('on');
        $('.mv_slidenum li').eq(c).addClass('on').siblings().removeClass('on');
    })
    $('.main_slide').slick({
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 700,
        pauseOnFocus: false,
        pauseOnHover: false,
    });
    $('.mv_arrow .left').on('click', function () {
        $('.main_slide').slick('slickPrev');
    })
    $('.mv_arrow .right').on('click', function () {
        $('.main_slide').slick('slickNext');
    })
    $('.mv_slidenum li').on('click', function (e) {
        e.preventDefault();
        const idx = $(this).index();
        $('.main_slide').slick('slickGoTo', idx);
    });


    $('.text_loop').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 0,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 15000,
        pauseOnFocus: false,
        pauseOnHover: false,
        cssEase: 'linear'
    });

    $('.bouquet_slide').on('init afterChange', function (e, idx, currentSlide) {
        let current = $('.bouquet_slide .slick-current');
        let next = $('.bouquet_slide .slick-current + .slick-slide + .slick-slide');

        const er = $([current, next]);
        console.log(er);


        $('.bouquet_slide .itm').removeClass('on')
        er.each(function () {
            $(this).addClass('on')
        })

    });
    $('.bouquet_slide').slick({
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        }],
    });
    $('.bou_arrow .left').on('click', function () {
        $('.bouquet_slide').slick('slickPrev');
    })
    $('.bou_arrow .right').on('click', function () {
        $('.bouquet_slide').slick('slickNext');
    })



    var length = $(".sec3 .swiper-slide").length;
    var bullet = ['Jane', 'Taylor', 'Millie'];
    const Trend = new Swiper('.collection_slide', {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 700,
        mousewheel: true,
        effect: "creative",
        creativeEffect: {
            prev: {
                shadow: false,
                translate: ["-20%", 0, -1],
            },
            next: {
                translate: ["100%", 0, 0],
            },
        },
        pagination: {
            el: '.collection_page',
            clickable: true,
            renderBullet: function (index, className) {
                return '<div class="' + className + '"><span>' + (bullet[index]) + '</span></div>';
            }
        },
        navigation: {
            nextEl: '.col_arrows .right',
            prevEl: '.col_arrows .left',
        },
        on: {
            slideChange: function () {
                var idx = this.activeIndex;

                if (idx != 0 && idx != length) $.fn.fullpage.setAllowScrolling(false);
                if (length == 1 && idx == 0) $.fn.fullpage.setAllowScrolling(false);
            },
            slideChangeTransitionEnd: function () {
                var idx = this.activeIndex;
                if (idx == 0 || idx >= length - 1) $.fn.fullpage.setAllowScrolling(true);
            },
        },
    });


    $('.side_nav li').on('click', function () {
        $(this).addClass('on').siblings().removeClass('on')
    });


    //반응형
    $('.mobile_menu').on('click', function () {
        $(this).toggleClass('on');
        $('.gnb').toggleClass('on');
    });
    $(window).on('resize', function () {
        $('.mobile_menu').removeClass('on');
        $('.gnb').removeClass('on');
    });
    $('.gnb').on('wheel touchmove', function (e) {
        if ($(this).hasClass('on')) {
            e.preventDefault();
        }
    });
});