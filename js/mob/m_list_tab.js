var mltl_id = 0

$(".mltl_tit > li > a").click(function(){
  mltl_id = $(this).parent("li").index() + 1;
  $(".mltl_tit > li:nth-of-type("+mltl_id+") > a").addClass("mltlt_active")
  .parent("li").siblings().find("a").removeClass("mltlt_active");
  $(".mltl_notice").find("ul:nth-of-type("+mltl_id+")").addClass("mltl_notice_box_active").siblings().removeClass("mltl_notice_box_active");
})