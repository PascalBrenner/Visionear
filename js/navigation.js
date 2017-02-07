$(window).scroll(function(){
  if($(document).scrollTop() > 50){
    $('nav').addClass('main-nav-fixed');
    $('#logo').addClass('logo-top');
    $('#nav-elem').addClass('nav-elements-fixed');
  }
  else {
    $('nav').removeClass('main-nav-fixed');
    $('#logo').removeClass('logo-top');
    $('#nav-elem').removeClass('nav-elements-fixed');
  }
});
