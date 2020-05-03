

$(document).ready(function(){
    var containerHeight = $('.header').height();

    $(window).scroll(function(){
        //parallax header
        var wScroll = $(this).scrollTop();
        if(wScroll <= containerHeight) {
            $('.header__middle-1').css({
                'transform': 'translate(0%, '+ (wScroll/90) +'%)'
            });
            $('.header__middle-2').css({
                'transform': 'translate(0%, '+ (wScroll/8) +'%)'
            });
            $('.header__back').css({
                'transform': 'translate(0%, '+ wScroll/70 +'%)'
            });
            $('.header__fore').css({
                'transform': 'translate(0%, -'+ wScroll/50 +'%)'
            });
        }
       
    
        // sticky header 
        
        if(wScroll >= ($('.section-about').offset().top - 50)){
            $('.nav').addClass('nav__sticky');
        } else {
            $('.nav').removeClass('nav__sticky');
        }



        //decoration animation-left
        if(wScroll > $('.section-about').offset().top + $(window).height()/20 && wScroll < $('.section-services').offset().top) {
                $('.decor-left').css({
                'transform': 'rotate('+(wScroll/20-29) +'deg)'
            });
        
        };

        //decoration animation-right
        if(wScroll > $('.section-portfolio').offset().top - $(window).height()/3 && wScroll < $('.footer').offset().top) {
            $('.decor-right').css({
                'transform': 'rotate('+(-wScroll/30+85) +'deg)'
            });
        
        };

    });


    //menu modal
    $('.menu').click(function(){
        $('.nav__menu').toggleClass('visible');
        console.log('visible toggle')
    });
    $(document).click(function(event) {
        //if click on anything except the modal itself or the "open modal" link, close the modal
        if (!$(event.target).closest(".nav__menu,.menu").length) {
          $("body").find(".nav__menu").removeClass("visible");
          console.log('click ouside')
        }
    });

});