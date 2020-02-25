/*$(document).ready(function(){
      $('.flecha-final').click(function(){
        $('body, html').animate({
          scrollTop:'0px'
        },300);
      });

      $(window).scroll(function(){
          if($(this).scrollTop()>0){
              $('.flecha-final').slideDown(300);
            }else{
              $('.flecha-final').slideUp(300);
          }
      });
});*/

/*-----------------------------------*/
$(document).ready(function(){
  $('.flecha-final').hide();

  $(window).scroll(function(){
    if($(this).scrollTop()>100){
      $('.flecha-final').fadeIn('1000');
    }else{
      $('.flecha-final').fadeOut('1000');
    }
  });
  $('.flecha-final').click(function(){
    $('body, html').animate({
      scrollTop:0
    });
  });
});
