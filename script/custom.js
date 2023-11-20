$(function(){
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
        //swiper 
        const swiper = new Swiper('.swiper', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
        
            // If we need pagination
            pagination: {
            el: '.swiper-pagination',
            },
        });
})