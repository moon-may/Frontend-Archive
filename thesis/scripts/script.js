         $(document).ready(function(){
             $('.about__div').addClass('about__div_fly');
             $('.about__css').addClass('about__css_fly');
             $('.about__div2').addClass('about__div2_fly');
             $('.about__close').addClass('about__close_fly');
             $('.about__close2').addClass('about__close2_fly');
             $('.about__hash').addClass('about__hash_fly');
             $('.cost-bar__div').addClass('cost-bar__div_fly');
             $('.cost-bar__css').addClass('cost-bar__css_fly');
             $('.cost-bar__css2').addClass('cost-bar__css2_fly');
             $('.cost-bar__close').addClass('cost-bar__close_fly');

             $('.nav__button_size_m').click(function(){
                 $('.nav__list_m').toggle();
                 $('body').toggleClass('fixed');
             });
             $('.nav__item_m').click(function(){
                 $('.nav__list_m').hide();
                 $('body').removeClass('fixed');
             });

             $('.button_call').click(function(){
                 $('.box-form').show(400);
                 $('.box-form').css('display', 'flex');
                
             });
             $('.button_orange').click(function(){
                $('.box-form').show(400);
                $('.box-form').css('display', 'flex');
            });
             $('.button_close').click(function(){
                 $('.box-form').hide(400);
             });
         
             $('.success__button').click(function(){
                 $('.box-form').hide(400);
             });

             $('.form__tel').inputmask({"mask": "+7 (999) 999-99-99"});


//swiper --
             var mySwiper = new Swiper('.swiper-container', {
                loop: true,       //слайды крутятся непрерывным циклом
                direction: 'horizontal',
             //   slidesPerView: 'auto',
                slidesOffsetBefore: 100,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                  },
                navigation: {
                    nextEl: '.example__button_reverse',
                    prevEl: '.example__button',
                  },
                breakpoints: {
                    1123: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                    320: {
                        slidesPerView: 1, 
                        spaceBetween: 50,
                    },
                    578: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                    }
                },
              });
//отправка формы на почту 
$('form').each(function () {
    $(this).validate({
        errorPlacement(error, element) {
            return true;
        },
        focusInvalid: false,
        rules: {
            Телефон: {
                required: true,
            },
            Имя: {
                required: true,
            },
            Почта: {
                required: true,
                email: true,
            }
        },
        
        submitHandler(form) {
        let th = $(form);

        $.ajax({
        type: 'POST',
        url: 'mail.php',
        data: th.serialize(),
    }).done(() => {
            $('.popup__success').show(400);
            $('.popup__success').css('display', 'flex');
      //  th.trigger('reset');
    });

    return false;
    }
});
});
          });
            
         
            
            function canvas () {

                    
                var canvas = document.getElementById('figure');
                var c = canvas.getContext('2d');
                    grad = c.createLinearGradient(100, 30, 100, 400);
                grad.addColorStop(0, "#ff2f96");
                grad.addColorStop(1, "#ff8f5a");
            
            c.beginPath();
            c.moveTo(685, 27);
            c.bezierCurveTo(1000, 150, 1000, 600, 685, 725);
            c.quadraticCurveTo(333, 850, 80, 679);
            c.bezierCurveTo(-25, 600, -1, 550, 11, 502);
            c.bezierCurveTo(55, 363, 350, 60, 444, 24);
            c.quadraticCurveTo(550, -25, 685, 27);
            c.fillStyle = grad;
            c.fill();
        } 

        
        


    
