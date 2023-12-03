var ltls = 0;

$(".lt_tab_link > li > a").click(function(){
  ltls = $(this).parent("li").index() + 1;
  $(this).parent("li:nth-of-type("+ltls+")").find("a").addClass("ltl_select")
  .parent("li").siblings().find("a").removeClass("ltl_select");
  $(".lt_tab_link").find("li > #ltl_notice_box"+ltls+"").addClass("lnb_active")
  .parent("li").siblings().find("div.ltl_notice_box").removeClass("lnb_active");
})