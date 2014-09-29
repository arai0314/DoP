$(function(){
  $(window).scroll(function(){
    var y = jQuery(this).scrollTop();
    $('#temae').css('background-position', '0 ' + parseInt( y / 0.3 ) + 'px');
    $('#naka').css('background-position', '0 ' + parseInt( y / 0.6 ) + 'px');
    $('#oku').css('background-position', '0 ' + parseInt( y / 0.9 ) + 'px');
  });
});