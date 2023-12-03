var cos_num = 0;
var co_timer = 0;
var cos_iw = 0
cos_iw = $("body").width();
$(window).resize(function(){
  cos_iw = $(".hb_news_container").width();
});

co_timer = setInterval("co_auto()", 5000);

function co_auto(){
  cos_num++;
  if(cos_num >= 5){
    $(".cert_slide_move > .cs_static:nth-of-type("+cos_num+")").animate({"opacity": 0}, 500, function(){
      $(".cert_slide_move").animate({"left": -cos_num * 100 + "%"}, 0, function(){
      $(".cert_slide_move > .cs_static:nth-of-type(5)").css({"opacity": 1});
      $(".cert_slide_move").css({"left":0});
      $(".cert_container > ul > li:nth-of-type("+(cos_num + 1)+") > button > span").addClass("csi_active")
      .parents("li").siblings().find("span").removeClass("csi_active");
    })
    })
    cos_num = 0 ;
  }
  else {
    $(".cert_slide_move > .cs_static:nth-of-type("+cos_num+")").animate({"opacity": 0}, 500, function(){
      $(".cert_slide_move").animate({"left": -cos_num * 100 + "%"}, 0);
      $(".cert_slide_move > .cs_static:nth-of-type("+cos_num+")").css({"opacity": 1});
      $(".cert_container > ul > li:nth-of-type("+(cos_num + 1)+") > button > span").addClass("csi_active")
      .parents("li").siblings().find("span").removeClass("csi_active");
    }) 
  }
}

function co_auto_rev() {
  cos_num--;
  if(cos_num < 0){
    cos_num = 4;
    $(".cert_slide_move > .cs_static:nth-of-type(1)").animate({"opacity": 0}, 500, function(){
      $(".cert_slide_move").css({"left": -(cos_num+1) * 100 + "%"}).animate({"left": -cos_num * 100 + "%"}, 0);
      $(".cert_slide_move > .cs_static:nth-of-type(1)").css({"opacity": 1}).stop();
      $(".cert_container > ul > li:nth-of-type("+(cos_num + 1)+") > button > span").addClass("csi_active")
      .parents("li").siblings().find("span").removeClass("csi_active");
    })
  }
  else {
    $(".cert_slide_move > .cs_static:nth-of-type("+(cos_num + 2)+")").animate({"opacity": 0}, 500, function(){
      $(".cert_slide_move").animate({"left": -cos_num * 100 + "%"}, 0);
      $(".cert_slide_move > .cs_static:nth-of-type("+(cos_num + 2)+")").css({"opacity": 1}).stop();
      $(".cert_container > ul > li:nth-of-type("+(cos_num + 1)+") > button > span").addClass("csi_active")
      .parents("li").siblings().find("span").removeClass("csi_active");
    })
  }
}

$(".cert_container > ul > li > button > span").click(function(){
  clearInterval(co_timer);
  cos_check = 1;
  if(cos_iw > 800) {
    $(".cs_stop").animate({"bottom": 26}, 500);
    $(".cs_play").animate({"bottom": 26}, 500);
  }
  else {
    $(".cs_stop").animate({"bottom": 22}, 500);
    $(".cs_play").animate({"bottom": 22}, 500);
  }
  cos_num = $(this).parents("li").index();
  $(".cert_slide_move > .cs_static:nth-of-type("+(cos_num + 1)+")").siblings().animate({"opacity": 0}, 500, function(){
    $(".cert_slide_move > .cs_static:nth-of-type("+(cos_num + 1)+")").siblings().css({"opacity": 1});
    $(".cert_slide_move").animate({"left": -cos_num * 100 + "%"}, 0);
    $(".cert_container > ul > li").eq(cos_num).find("span").addClass("csi_active")
    .parents("li").siblings().find("span").removeClass("csi_active");
  });
  })

$("#cert").hover(
  function(){
    clearInterval(co_timer);
  },
  function(){
    co_timer = setInterval("co_auto()", 5000);
    if(vs_check == 1){
      clearInterval(co_timer);
    }
  }
);


$(".cs_prev").click(function(){
  cos_check = 1;
  clearInterval(co_timer);
  co_auto_rev();
  if(cos_iw > 800) {
    $(".cs_stop").animate({"bottom": 26}, 500);
    $(".cs_play").animate({"bottom": 26}, 500);
  }
  else {
    $(".cs_stop").animate({"bottom": 22}, 500);
    $(".cs_play").animate({"bottom": 22}, 500);
  }
});

$(".cs_next").click(function(){
  cos_check = 1;
  clearInterval(co_timer);
  co_auto();
  if(cos_iw > 800) {
    $(".cs_stop").animate({"bottom": 26}, 500);
    $(".cs_play").animate({"bottom": 26}, 500);
  }
  else {
    $(".cs_stop").animate({"bottom": 22}, 500);
    $(".cs_play").animate({"bottom": 22}, 500);
  }
});

$(".cs_stop").click(function(){
  cos_check = 1;
  if(cos_iw > 800) {
    $(".cs_stop").animate({"bottom": 26}, 500);
    $(".cs_play").animate({"bottom": 26}, 500);
  }
  else {
    $(".cs_stop").animate({"bottom": 22}, 500);
    $(".cs_play").animate({"bottom": 22}, 500);
  }
});

$(".cs_play").click(function(){
  cos_check = 0;
  $(".cs_stop").animate({"bottom": 0}, 500);
  $(".cs_play").animate({"bottom": 0}, 500);
})