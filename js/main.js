$(function(){
    'use strict';
    
    

$(".topMenuSearch").click(function(){
    $('.search_form').addClass('show');
  });

$('.closeSearchForm').click(function(){
    $('.search_form').removeClass('show');
});


   //=====NICE SELECT=======
   $('#nice-select-one').niceSelect();
   $('#nice-select-two').niceSelect();


   //=======VENOBOS.JS======
   $('.venobox').venobox();
    

   //=======Slick Slider=====

   $('.bannerSlider').slick({
    centerMode: false,
    dots: true,
    arrows:false,
    autoPlay:false,
    slidesToShow: 1,
  });

  $('.serviceSlider').slick({
    dots: true,
    infinite: false,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
      


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});