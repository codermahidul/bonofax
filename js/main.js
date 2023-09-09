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
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});