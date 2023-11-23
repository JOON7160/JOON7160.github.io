$(function(){
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
        //recommendation swiper
        var recommendSwiper = new Swiper(".recommend-list", {
            pagination: {
            el: ".recommend-pagination",
            type: "progressbar",
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
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
        $('section.notice .notice-wrap .notice-content > .notice-tab  li').click(function(){
            $(this).addClass('active')
            $(this).siblings().removeClass('active')
            $('#' + $(this).attr('data-tab')).addClass('active')
            $('#' + $(this).attr('data-tab')).siblings().removeClass('active')
        })
})