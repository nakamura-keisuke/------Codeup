jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

    $(function () {
        // ハンバーガーメニュー
        $('.js-hamburger,.js-drawer').click(function () {
            $('.js-hamburger').toggleClass('is-active')
            $('.js-drawer').fadeToggle()
            $('body').toggleClass('active')
        })
    });

    const CampaignSwiper = new Swiper(".js-campaign-swiper", {
        loop: true, // ループ有効
        slidesPerView: 1.3, // 一度に表示する枚数
        speed: 3000, // ループの時間
        allowTouchMove: false, // スワイプ無効
        spaceBetween: 24,
        width: 371.5,

        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },

        breakpoints: {
            768: {
                slidesPerView: 3.5,
                spaceBetween: 40,
                width: 1080,

            },
            1440: {
                slidesPerView: 5,
                spaceBetween: 40,
                width: 1830,
            },
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    });

    //要素の取得とスピードの設定
    var box = $('.colorbox'),
        speed = 700;

    //.colorboxの付いた全ての要素に対して下記の処理を行う
    box.each(function () {
        $(this).append('<div class="color"></div>')
        var color = $(this).find($('.color')),
            image = $(this).find('img');
        var counter = 0;

        image.css('opacity', '0');
        color.css('width', '0%');
        //inviewを使って背景色が画面に現れたら処理をする
        color.on('inview', function () {
            if (counter == 0) {
                $(this).delay(200).animate({
                    'width': '100%'
                }, speed, function () {
                    image.css('opacity', '1');
                    $(this).css({
                        'left': '0',
                        'right': 'auto'
                    });
                    $(this).animate({
                        'width': '0%'
                    }, speed);
                })
                counter = 1;
            }
        });
    });

    // ページトップボタン
    $(function () {
        const pageTop = $(".js-page-top");
        pageTop.hide();
        $(window).scroll(function () {
            if ($(this).scrollTop() > 20) {
                pageTop.fadeIn();
            } else {
                pageTop.fadeOut();
            }
        });
        pageTop.click(function () {
            $("body, html").animate({
                    scrollTop: 0,
                },
                300
            );
            return false;
        });
    });

    const mvSwiper = new Swiper('.js-mv-swiper', {
        loop: true,
        effect: 'fade',
        speed: 3000,
        allowTouchMove: false,
        autoplay: {
            delay: 3000,
        },
    });


});