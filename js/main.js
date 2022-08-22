$(function () {



  $('.slider__blog').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
  });

  $('.menu__btn, .menu a').on('click', function () {

    $('.header__inner').toggleClass('header__inner--active')

  });

   
  var mixer = mixitup('.gallery__content');

 
// для плавного скрола меню
  $(".menu a").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });


  $(window).scroll(function () {
    if ($(window).scrollTop()) {
      $('.header__top').addClass('header__active');
      $('.header__inner').css({
        'padding-top': '16px',
        'padding-bottom': '16px',
        'transition': 'all 0.3s'
      });
    }
    else {
      $('.header__top').removeClass('header__active');
      $('.header__inner').css({
        'padding-top': '36px',
        'padding-bottom': '0px',
        'transition': 'all 0.3s'
      });
    }
  });

  



});  