var hssc = 0;
var hns_timer = 0;
var hns_iw = 0;
var test = 0;
hns_iw = $(".quick_menu_slide > li").width()


function hanbit_slide(){
  $(".quick_menu_slide").animate({"left": -hns_iw}, 500, function(){
    $(".quick_menu_slide > li:first-of-type").appendTo(".quick_menu_slide");
    $(".quick_menu_slide").css({"left":0}); 
  });
}

function hanbit_slide_rev() {
  $(".quick_menu_slide > li:last-of-type").prependTo(".quick_menu_slide")
  $(".quick_menu_slide").css({"left": -hns_iw}).animate({"left":0}, 500);
}

$(".qs_prev").click(function(){
  hanbit_slide_rev();
})

$(".qs_next").click(function(){
  hanbit_slide();
})
