var vs_num = 0;
var vs_timer = 0;
var vs_check = 0;

var mhs = 0;
mhs = $("body").width();
$(window).resize(function(){
  mhs = $(".header_container").width();
  if(mhs < 801) {
    $(".header_container").height(mhs * 0.84);
    $(".hd_slide_container").height(mhs * 0.84);
    $(".hd_slide_container_box").height(mhs * 0.84);
  }
  else {
    $(".header_container").height(900);
    $(".hd_slide_container").height(900);
    $(".hd_slide_container_box").height(900);
  }
});

function hd_slide(){
  vs_num++;
  if(vs_num >= 4) {
    $(".hd_slide_container").animate({"left":-vs_num * 100 + "%"}, 500, function(){
      $(".hd_slide_container").css({"left":0});
    });
    vs_num = 0;
  }
    else {
      $(".hd_slide_container").animate({"left":-vs_num * 100 + "%"}, 500);
    }
    $(".visual_page > li:nth-of-type("+(vs_num + 1)+") > button > span").addClass("vs_page")
    .parents("li").siblings().find("span").removeClass("vs_page");
  }

  function hd_slide_rev(){
    vs_num--;
    if(vs_num < 0) {
      vs_num = 3;
      $(".hd_slide_container").css({"left": -(vs_num + 1) * 100 + "%"});
      $(".hd_slide_container").animate({"left": -vs_num * 100 + "%"}, 500);
    }
    else {
      $(".hd_slide_container").animate({"left": -vs_num * 100 + "%"}, 500);
    }
    $(".visual_page > li:nth-of-type("+(vs_num + 1)+") > button > span").addClass("vs_page")
      .parents("li").siblings().find("span").removeClass("vs_page");
  }

  vs_timer = setInterval("hd_slide()", 5000);

  $(".visual_page > li > button").click(function(){
    clearInterval(vs_timer);
    vs_check = 1;
    $(".vs_stop").animate({"bottom": 28}, 500);
    $(".vs_play").animate({"bottom": 26}, 500);
    vs_num = $(this).parent("li").index();
    $(".visual_page > li:nth-of-type("+(vs_num + 1)+") > button > span").addClass("vs_page")
    .parents("li").siblings().find("span").removeClass("vs_page");
    $(".hd_slide_container").animate({"left": -vs_num * 100 + "%"}, 500);
  });

  $(".vs_next").click(function(){
    vs_check = 1;
    clearInterval(vs_timer);
    hd_slide();
    $(".vs_stop").animate({"bottom": 28}, 500);
    $(".vs_play").animate({"bottom": 26}, 500);
  });

  $(".vs_prev").click(function(){
    vs_check = 1;
    clearInterval(vs_timer);
    hd_slide_rev();
    $(".vs_stop").animate({"bottom": 28}, 500);
    $(".vs_play").animate({"bottom": 26}, 500);
  });

  $(".vs_stop").click(function(){
    clearInterval(vs_timer);
    vs_check = 1;
    $(".vs_stop").animate({"bottom": 28}, 500);
    $(".vs_play").animate({"bottom": 26}, 500);
  });

  $(".vs_play").click(function(){
    vs_check = 0;
    vs_timer = setInterval("hd_slide()", 5000);
    $(".vs_play").animate({"bottom": 0}, 500);
    $(".vs_stop").animate({"bottom": 0}, 500);
  });

  $(".hd_slide_container").hover(
    function(){
      clearInterval(vs_timer);
    },
    function(){
      vs_timer = setInterval("hd_slide()", 5000);
      if(vs_check == 1){
        clearInterval(vs_timer);
      }
    }
  );


  