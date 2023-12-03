var us_iw = 0;
us_iw = $("body").width();
$(window).resize(function(){
  us_iw = $("body").width();
});

var usf_id = 0;
$(".usf_container > ul > li > button").click(function(){
  usf_id = $(this).parent("li").index() + 1;
  $(".usf_container > ul > li:nth-of-type("+usf_id+") > ul").slideToggle(500)
  .parents("li").siblings().find("ul").slideUp(500);
  $(".usf_container > ul > li:nth-of-type("+usf_id+") > button > span").toggleClass("sp_rot");
  $(".usf_container > ul > li:nth-of-type("+usf_id+") > button > span > img.us_open").toggleClass("uo_dn").parents("li").siblings().find("img.us_open").removeClass("uo_dn");
  $(".usf_container > ul > li:nth-of-type("+usf_id+") > button > span > img.us_close").toggleClass("uc_db").parents("li").siblings().find("img.us_close").removeClass("uc_db");
  if(us_iw < 800) {
    $(".usf_container > ul > li:nth-of-type("+usf_id+") > button").toggleClass("usf_btn_active").parent("li").siblings().find("button").removeClass("usf_btn_active");
  } 
})