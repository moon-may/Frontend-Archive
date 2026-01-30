$(document).ready(function(){
    $('.order-btn').click(function(){
        $('.order-form').show(300);
        $('body').addClass('fixed');
    });
    $('.partner-btn').click(function(){
        $('.partner-form').show(300);
        $('body').addClass('fixed');
    });
    $('.fa-bars').click(function(){
        $('.nav-mobile').show(400);
    });
    $('.fa-phone').click(function(){
        $('.phone').show(400);
    });
    $('.header__btn-close').click(function(){
        $('.phone').hide(300);
    });
    $('.header__nav-item').click(function(){
        $('.nav-mobile').hide(400);
    });
    $('.main__button').click(function(){
        $('.main__question').toggle(400);
    });
    $('.form__button-close').click(function(){
        $('.popup').hide(300);
        $('body').removeClass('fixed');
    });
    $('.products__button').click(function(){
        $(this).next().show(300);
    });
    $('.products__button-close').click(function(){
        $('.products__text').hide(300);
    })
});



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
      //  th.trigger('reset');
    });

    return false;
    }
});
});


