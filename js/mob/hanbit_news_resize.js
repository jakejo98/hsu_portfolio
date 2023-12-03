var hnc = 0;

hnc = $("body").width();
$(window).resize(function(){
  hnc = $(".hb_news_container").width();
  if(hnc < 801){
    $(".hb_news_container").height(hnc * 0.7);
  }
  else {
    $(".hb_news_container").height(620);
  }
});

var hp = 0;
$(window).resize(function(){
  hp = $(".hb_photo").width();
  if(hp < 801){
    $(".hb_photo").height(hp * 0.7);
  }
  else {
    $(".hb_photo").height(500);
  }
});

var hps = 0;
$(window).resize(function(){
  hps = $(".hb_photo_show").width();
  if(hps < 801){
    $(".hb_photo_show").height(hps * 0.515);
  }
  else {
    $(".hb_photo_show").height(358);
  }
});

