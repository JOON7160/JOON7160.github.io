$(function(){
    //menu-btn
    $('.trigger').click(function(){
        $('.sub, .gnb-bg, .bg-overlay').slideUp('fast')
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
    $('.gnb li').mouseover(function(){
        $('.gnb-bg').slideDown('fast')
        $('.sub').fadeIn()
        $('.bg-overlay').show()
    })
    $('.bg-overlay').mouseover(function(){
        $('.gnb-bg').slideUp('fast')
        $('.sub').fadeOut('fast')
        $('.bg-overlay').hide()
        })
        //main swiper 
        const mainswiper = new Swiper('.main-swiper', {
            spaceBetween: 30,
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
        $('.main-swiper-play-btn').on('click',function(){
            if (mainswiper.autoplay.running) {
                mainswiper.autoplay.stop();
                $('.main-swiper-play-btn .fa-play').show();
                $('.main-swiper-play-btn .fa-pause').hide();
            } else {
                mainswiper.autoplay.start()
                $('.main-swiper-play-btn .fa-play').hide()
                $('.main-swiper-play-btn .fa-pause').show()
            }
        });
        //simulation swiper
        var simulationswiper = new Swiper(".simulation-swiper", {
            slidesPerView: 3,
            spaceBetween: 10,
            loopedSlides: 3,
            centeredSlides: true,
            slideToClickedSlide : true,
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
                slidesPerView: 4,
                spaceBetween: 40,
                },
                1024: {
                slidesPerView: 6,
                spaceBetween: 10,
                },
            },           
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
        var pagingSwiper = new Swiper (".recommend-list", {
            slidesPerView: 2,
            spaceBetween: 10,
            pagination: {
                el: ".fraction-pagination",
                type: "fraction",
            },
            loopedSlides: 5,
            loop: true,
            breakpoints: {
                // 640: {
                // slidesPerView: 4,
                // spaceBetween: 20,
                // },
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
        pagingSwiper.controller.control = recommendSwiper;

        //notice tab
        $('.notice-tab .tab li').click(function(){
            $(this).addClass('active')
            $(this).siblings().removeClass('active')
            $('#' + $(this).attr('data-tab')).addClass('active')
            $('#' + $(this).attr('data-tab')).siblings().removeClass('active')
        })
})