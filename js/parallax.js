$(function() {
  var top = $('.pink').offset().top; //y座標の初期値を取得
  $(window).scroll(function() {
    var value = $(this).scrollTop();  //スクロール値を取得
	
    //スクロール値を除算して移動距離に変化をつける
    $('.pink').css('top', top + value / 2);
	$('.blue').css('top', top -700 + value /2);
	$('.yellow').css('top', top -800 + value /2);
  });
});
