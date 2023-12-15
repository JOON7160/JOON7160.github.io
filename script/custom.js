$(function(){
    //menu-btn
    $('.trigger').click(function(){
        $('.gnb__sub, .gnb__bg, .gnb__overlay').slideUp('fast')
        $('.m-menu').addClass('active')
    })
    $('.close-btn').click(function(){
        $('.m-menu').removeClass('active')
    })
    //floating-top 
    $(window).scroll(function(){
        if ($(window).scrollTop() > 70) {
            $('.top-btn').addClass('active')
        }
        else {
            $('.top-btn').removeClass('active')
        }
    })
    //m-menu
    $('.menu-list li h3').click(function(){
        if($(window).width() < 640) {
        $(this).toggleClass('active')
        $(this).siblings().stop().slideToggle()
        $(this).parent().siblings().children('h3').removeClass('active')
        $(this).parent().siblings().children('h3').siblings().slideUp() 
        }
        else {
            
        }
        
    })
    // gnb 
    $('.gnb__item').mouseover(function(){
        $('.gnb__bg').stop().slideDown('fast')
        $('.gnb__sub').stop().fadeIn()
        $('.gnb__overlay').show()
    })
    $('.gnb__overlay').mouseover(function(){
        $('.gnb__bg').stop().slideUp('fast')
        $('.gnb__sub').stop().fadeOut('fast')
        $('.gnb__overlay').hide()
        })
        //main swiper 
        const mainSwiper = new Swiper('.main__swiper.swiper', {
            wrapperClass: 'main__swiper--wrapper',
            slideClass: 'main__swiper--slide',
            effect: "fade",
            direction: 'horizontal',
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
            el: '.main-pagination',
            },
        });
        // mainSwiper control
        $('.main__swiper--control .btn--play').on('click',function(){
            if (mainSwiper.autoplay.running) {
                mainSwiper.autoplay.stop();
                $('.main__swiper--control .btn--play--active').show();
                $('.main__swiper--control .btn--play--disabled').hide();
            } else {
                mainSwiper.autoplay.start()
                $('.main__swiper--control .btn--play--active').hide()
                $('.main__swiper--control .btn--play--disabled').show()
            }
            console.log('.main__swiper--control .btn--play')
        });
        //simulation swiper
        var simulationswiper = new Swiper(".simulation-swiper", {
            slidesPerView: 2,
            spaceBetween: 10,
            loopedSlides: 2,
            centeredSlides: true,
            loop: true,
            pagination: {
            el: ".simulation-pagination",
            type: "fraction",
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".simul-btn-next",
                prevEl: ".simul-btn-prev",
            },
            breakpoints: {
                640: {
                slidesPerView: 4,
                spaceBetween: 20,
                },
                768: {
                slidesPerView: 3,
                spaceBetween: 30,
                },
                1024: {
                slidesPerView: 5,
                spaceBetween: 10,
                },
            },           
        });
        // simulation swiper control
        $('.simulation-swiper-play-btn').on('click',function(){
            if (simulationswiper.autoplay.running) {
                simulationswiper.autoplay.stop();
                $('.simulation-swiper-play-btn .fa-play').show();
                $('.simulation-swiper-play-btn .fa-pause').hide();
            } else {
                simulationswiper.autoplay.start()
                $('.simulation-swiper-play-btn .fa-play').hide()
                $('.simulation-swiper-play-btn .fa-pause').show()
            }
        });
        //recommendation swiper
        var recommendSwiper = new Swiper(".recommend-list", {
            pagination: {
            el: ".recommend-pagination",
            type: "progressbar",
            },
            navigation: {
                nextEl: ".reco-btn-next",
                prevEl: ".reco-btn-prev",
            },
            loopedSlides: 5,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            breakpoints: {
                // 640: {
                // slidesPerView: 4,
                // spaceBetween: 20,
                // },
                768: {
                slidesPerView: 2,
                spaceBetween: 20,
                },
                1024: {
                slidesPerView: 5,
                spaceBetween: 10,
                },
            },
        });
                // recommendation swiper control
        $('.reco-swiper-play-btn').on('click',function(){
            var isAutoplayRunning = recommendSwiper.autoplay.running || pagingSwiper.autoplay.running;
            if (isAutoplayRunning) {
                recommendSwiper.autoplay.stop();
                pagingSwiper.autoplay.stop();
            } else {
                recommendSwiper.autoplay.start();
                pagingSwiper.autoplay.start();
            }
            $('.reco-swiper-play-btn .fa-play').toggle(!isAutoplayRunning);
            $('.reco-swiper-play-btn .fa-pause').toggle(isAutoplayRunning);
        });
        var pagingSwiper = new Swiper (".recommend-list", {
            slidesPerView: 1,
            spaceBetween: 10,
            pagination: {
                el: ".fraction-pagination",
                type: "fraction",
            },
            loopedSlides: 1,
            loop: true,
            breakpoints: {
                640: {
                slidesPerView: 2,
                spaceBetween: 20,
                },
                // 768: {
                // slidesPerView: 4,
                // spaceBetween: 40,
                // },
                1024: {
                slidesPerView: 5,
                spaceBetween: 10,
                },
            },
        });
        recommendSwiper.controller.control = pagingSwiper;
        //notice tab
        $('.notice-tab .tab li').click(function(){
            $(this).addClass('active')
            $(this).siblings().removeClass('active')
            $('#' + $(this).attr('data-tab')).addClass('active')
            $('#' + $(this).attr('data-tab')).siblings().removeClass('active')
        })
})