var ftt_id = 0;
var ftt_iw = 0

ftt_iw = $("body").width();
$(window).resize(function(){
  ftt_iw = $("body").width();
});

$(".ftt_right > li > button").click(function(){
  ftt_id = $(this).parent("li").index() + 1;
  $(".ftt_right > li:nth-of-type("+ftt_id+") > button > img.fttr_arrow").toggleClass("fttra_active").parents("li").siblings().find("img.fttr_arrow").removeClass("fttra_active");
  $(".ftt_right > li:nth-of-type("+ftt_id+") > div").slideToggle(500).parents("li").siblings().find("div").slideUp(500);
  if(ftt_iw < 801){
    $(".ftt_right > li:nth-of-type("+ftt_id+")").toggleClass("mft_active").siblings().removeClass("mft_active");
  }
  else {
    $(".ftt_right > li:nth-of-type("+ftt_id+")").toggleClass("fttrl_active").siblings().removeClass("fttrl_active");
  }
});