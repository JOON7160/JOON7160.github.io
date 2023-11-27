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
        $(this).toggleClass('active')
        $(this).siblings().stop().slideToggle()
        $(this).parent().siblings().children('h3').removeClass('active')
        $(this).parent().siblings().children('h3').siblings().slideUp('fast')
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
            // Optional parameters
            direction: 'horizontal',
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            // If we need pagination
            pagination: {
            el: '.main-pagination',
            },
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
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
        });
        var pagingSwiper = new Swiper (".recommend-list", {
            slidesPerView: 5,
            spaceBetween: 10,
            pagination: {
                el: ".fraction-pagination",
                type: "fraction",
            },
            loop: true,
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