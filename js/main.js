$(function(){
    $('.news').on('inview',function(event,IsInView){
        if(IsInView){
            $(this).stop().addClass('slide-news');
        }
    });
    $('.company .img').on('inview',function(event,IsInView){
        if(IsInView){
            $(this).stop().addClass('slide-company-img');
        }
    });
    $('.company .text').on('inview',function(event,IsInView){
        if(IsInView){
            $(this).stop().addClass('slide-company-text');
        }
    });
    $('.business .item').on('inview',function(event,IsInView){
        if(IsInView){
            $(this).stop().addClass('slide-business');
        }
    });
    $('.sustainability .img').on('inview',function(event,IsInView){
        if(IsInView){
            $(this).stop().addClass('slide-sustainability ');
        }
    });
    $('.sustainability .text').on('inview',function(event,IsInView){
        if(IsInView){
            $(this).stop().addClass('slide-sustainability-text ');
        }
    });
    $('.recruit .img').on('inview',function(event,IsInView){
        if(IsInView){
            $(this).stop().addClass('slide-recruit-img ');
        }
    });
    $('.recruit .text').on('inview',function(event,IsInView){
        if(IsInView){
            $(this).stop().addClass('slide-recruit-text');
        }
    });
    
    $('.hamburger').on('click',function(){
        hamburger();
    });
    $('.nav a').on('click',function(){
        hamburger();
    })

    $('a[href^="#"]').on('click',function() {
        let href = $(this).attr("href");
        let target = $(href == "#" || href == "" ? 'html' : href);
        let position = target.offset().top;
        $("html,body").animate({scrollTop:position}, 600,"swing");
        return false;
      })
});

function hamburger(){
    $('.hamburger').toggleClass('active');
    if($('.hamburger').hasClass('active')){
        $('.nav').addClass('active');
    } else {
        $('.nav').removeClass('active');
    }
}


