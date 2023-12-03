var mhns_id = 0;
$(".quick_menu_container > ul > li > a").click(function(){
  mhns_id = $(this).parent("li").index() + 1;
  $(".quick_menu_container > ul > li:nth-of-type("+mhns_id+") > a").addClass("m_qm_active")
  .parent("li").siblings().find("a").removeClass("m_qm_active");
  if(mhns_id == 1){
    $(".quick_menu_slide").animate({"left": 0}, 500);
  }
  else if(mhns_id == 2){
    $(".quick_menu_slide").animate({"left": -100 + "%"}, 500);
  }
  else {
    $(".quick_menu_slide").animate({"left": -166.6 + "%"}, 500);
  }
});