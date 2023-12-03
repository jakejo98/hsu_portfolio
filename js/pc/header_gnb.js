var hd_box = 0;


$(".gnb > li").hover(
  function(){
    hd_box = $(this).index() + 1;
    $("#hd_link_"+hd_box+"").stop().slideDown(300)
    .parent("li").siblings().find(".hd_link_shell").slideUp(500);
    $(".hd_menu_container").css({"background":"#fff"});
    $(".logo_static").css({"display":"none"});
    $(".logo_active").css({"display":"block"});
    $(".gnb > li > a").css({"color":"#333"});
    $(".snb_ss").css({"display":"none"});
    $(".snb_sa").css({"display":"block"});
    $(".snb > li:nth-of-type(2) > a").css({"color": "#333"});
    $(".snb > li:nth-of-type(3) > a").css({"color": "#333"});
  },
  function(){
    hd_box = $(this).index() + 1;
    $("#hd_link_"+hd_box+"").slideUp(300).stop();
  }
);

$(".gnb").hover(
  function(){
  },
  function(){
    $("#hd_link_"+hd_box+"").stop().slideUp("300", function(){
      $(".hd_menu_container").css({"background":"none"});
      $(".logo_static").css({"display":"block"});
      $(".logo_active").css({"display":"none"});
      $(".gnb > li > a").css({"color":"#fff"});
      $(".snb_ss").css({"display":"block"});
      $(".snb_sa").css({"display":"none"});
      $(".snb > li:nth-of-type(2) > a").css({"color": "#fff"});
      $(".snb > li:nth-of-type(3) > a").css({"color": "#fff"});
    });
  }
);