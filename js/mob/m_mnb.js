var mbl_id = 0;
var mib_id = 0;
var mnb_height = $("body").height();
$(".mnb").height(mnb_height);

$(".mnb_bot_link > li > a").click(function(){
  mbl_id = $(this).parent("li").index() + 1;
  $(".mnb_bot_link > li:nth-of-type("+mbl_id+") > .mbl_box > ul").toggleClass("mbl_ul_active")
  .parents("li").siblings().find(".mbl_box > ul").removeClass("mbl_ul_active");
  $(".mnb_bot_link > li:nth-of-type("+mbl_id+") > .mbl_box > ul > li > a").toggleClass("mbl_a_active")
  .parents(".mnb_bot_link > li").siblings().find(".mbl_box > ul > li > a").removeClass("mbl_a_active");
  $(".mnb_bot_link > li:nth-of-type("+mbl_id+")").siblings().find(".mbl_box > ul > li > .mbl_inside_box > ul > li > a").removeClass("mib_a_active");
  $(".mnb_bot_link > li:nth-of-type("+mbl_id+")").siblings().find(".mbl_box > ul > li > .mbl_inside_box > ul").removeClass("mib_ul_active");
})

$(".mbl_box > ul > li > a").click(function(){
  mib_id = $(this).parent("li").index() + 1;
  $(".mnb_bot_link > li:nth-of-type("+mbl_id+") > .mbl_box > ul > li:nth-of-type("+mib_id+") > .mbl_inside_box > ul").toggleClass("mib_ul_active")
  .parents(".mbl_box > ul > li").siblings().find(".mbl_inside_box > ul").removeClass("mib_ul_active");
  $(".mnb_bot_link > li:nth-of-type("+mbl_id+") > .mbl_box > ul > li:nth-of-type("+mib_id+") > .mbl_inside_box > ul > li > a").toggleClass("mib_a_active")
  .parents(".mbl_box > ul > li").siblings().find(".mbl_inside_box > ul > li > a").removeClass("mib_a_active");
})

$(".m_ham_static").click(function(){
  $(".mnb").animate({"right": 0}, 500);
  $(".mnb_shadow").css({"display":"block"});
});

$(".m_ham_active").click(function(){
  $(".mnb").animate({"right": -280}, 500);
  $(".mnb_shadow").css({"display":"none"});
})
