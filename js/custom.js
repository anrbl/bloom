$(function () {

    var sNap = false;
    var secL = $(".section").length;
    var sEc = $(".section");
    var selI;

    sEc.eq(0).addClass("on");
    $('#fullpage').fullpage({
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',

        controlArrows: false, //슬라이드 화살표 숨김
        loopHorizontal: false, //슬라이드 반복 멈춤

        scrollingSpeed: 800,

        anchors: ['main', 'sec1', 'sec2', 'sec3', 'foot'],
        scrollHorizontally: true,
        scrollOverflow: true,

        navigation: false,
        responsiveWidth: 768,
        responsiveHeight: 800,


        afterLoad: function (origin, destination, idx, nidx) {
            sNap = false;
            sEc.eq(destination.index).addClass("on").siblings().removeClass("on");
        },
        onLeave: function (origin, destination, direction, trigger, idx, nidx) {
            console.log(idx, nidx)

            if (origin.index == 0 && direction == 'down') {
                $('.header').addClass('on')
                $('.side').addClass('on')
            } else if (origin.index == 1 && direction == 'down') {
                $('.header').addClass('on')
                $('.side').addClass('on')
            } else if (origin.index == 2 && direction == 'up') {
                $('.header').addClass('on')
                $('.side').addClass('on')
            } else if (origin.index == 3 && direction == 'down') {
                $('.header').addClass('on')
                $('.side').removeClass('on')
            } else if (origin.index == 3 && direction == 'up') {
                $('.header').addClass('on')
                $('.side').removeClass('on')
            } else {
                $('.header').removeClass('on')
                $('.side').removeClass('on')
            }

            $('.side_nav li').eq(nidx - 1).addClass('on').siblings().removeClass('on');

            sNap = true;
        }
    });

    $("#slide").on("wheel touchmove", function (e) {
        if (e.originalEvent.deltaY < 0) {
            fullpage_api.moveSlideLeft();
        }
        else {
            fullpage_api.moveSlideRight();
        }
    });

    $('.col_arrows .left').on('click', function (c, e, s) {
        fullpage_api.moveSlideLeft();
    })
    $('.col_arrows .right').on('click', function () {
        fullpage_api.moveSlideRight();
    })

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
        speed: 18000,
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