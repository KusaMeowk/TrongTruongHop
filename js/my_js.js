
function smoothScrolling() 
{
  try {
    $.browserSelector();
    if ($("html").hasClass("chrome")) {
      $.smoothScroll();
    }
  }catch (err) {
  }
}
$(function(){
  smoothScrolling();
});
$(document).ready(function(e) {
  ddsmoothmenu.init({
mainmenuid: "smoothmenu1", //menu DIV id
orientation: 'h', //Horizontal or vertical menu: Set to "h" or "v"
classname: 'ddsmoothmenu', //class added to menu's outer DIV
//customtheme: ["#1c5a80", "#18374a"],
contentsource: "markup" //"markup" or ["container_id", "path_to_menu_file"]
})
  $(".img_capcha").click(function() {
    $(this).attr("src","captcha/captcha.php?"+(new Date()).getTime());
  });
  $('nav#menu').mmenu();
});
$(window).bind("scroll", function () {
  var cach_top = $(window).scrollTop();
  var heaigt_header = $('#header').height();
  if (cach_top >= heaigt_header) {
    if (!$('#main_menu .box_menu').hasClass('fix_head')) {
      $('#main_menu .box_menu').addClass('fix_head');
    }
  } else {
    $('#main_menu .box_menu').removeClass('fix_head');
  }
});
new WOW().init();
$(document).ready(function() {
  $('.icon_timkiem').click(function(event) {
    if($('.timkiem_menu').hasClass('active1'))
    {
      $('.timkiem_menu').removeClass('active1');
      $('.timkiem').val('');
    }
    else
    {
      $('.timkiem_menu').addClass('active1');
    }
  });
  $('.form_timkiem').submit(function(event) {
    var keywords = $('.timkiem').val();
    if(keywords=='')
    {
      alert('Bạn chưa nhập từ khóa cần tìm . ');
    } 
    else 
    {
      window.location.href = 'tim-kiem&keyword='+keywords+'.html';
    }
    return false;
  });
});
$(document).ready(function() {
  var owl = $(".owladv");
  owl.owlCarousel({
    items : 1,
    navigation : false,
    autoPlay: 5000
  });

  var owl = $("#owl-demo95");
  owl.owlCarousel({
    itemsCustom : [
    [0, 1],
    [450, 2],
    [600, 2],
    [768, 2],
    [992, 3],
    [1200, 4],
    [1300, 4],
    [1600, 4]
    ],
    navigation : true,
    navigationText:["",""],
    autoPlay: 3000
  });
  var owl = $(".owl-demo96");
  owl.owlCarousel({
    itemsCustom : [
    [0, 1],
    [450, 1],
    [600, 1],
    [768, 1],
    [992, 1],
    [1200, 1],
    [1300, 1],
    [1600, 1]
    ],
    navigation : true,
    navigationText:["",""],
    autoPlay: false
  });
  var owl = $("#owl-demo97");
  owl.owlCarousel({
    itemsCustom : [
    [0, 1],
    [450, 1],
    [600, 1],
    [768, 1],
    [992, 2],
    [1200, 3],
    [1300, 3],
    [1600, 3]
    ],
    navigation : true,
    navigationText:["",""],
    autoPlay: 3000
  });
});

$(document).ready(function() {
  $('#selectget li').click(function(event) {
    $('#selectget li').removeClass('active');
    $(this).addClass('active');

    var tget = $(this).data('tget');
    $('.info-content .item-content').addClass('visible');
    $('#rss'+tget).removeClass('visible');

  });

});
(function($) {
  $(function() {
    $(".scrollnow ul").simplyScroll({orientation:'vertical',customClass:'vert1'});
  });
})(jQuery);