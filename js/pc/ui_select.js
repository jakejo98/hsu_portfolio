var rsb_id = 0;
$(".route_select_box > li").click(function(){
  rsb_id = $(this).index() + 1;
  $(".route_select_box > li:nth-of-type("+rsb_id+") > .rsb_select_box").slideToggle(500)
  .parents("li").siblings().find(".rsb_select_box").slideUp(500);
  $(".route_select_box > li:nth-of-type("+rsb_id+") > button > img.ui_sel").toggleClass("ui_sel_active")
  .parents("li").siblings().find("button > img.ui_sel").removeClass("ui_sel_active");
});