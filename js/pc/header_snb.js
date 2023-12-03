$(".lang_btn").click(function(){
  $(".snb_mi_lang").toggleClass("sml_active");
  $(".lang_btn > ul").slideToggle(500);
})

$(".pop_btn").click(function(){
  $(".snb_mi_pop").toggleClass("smp_active");
})

$(".snb_ss").click(function(){
  $(".search_box").slideDown(500);
})

$(".search_close").click(function(){
  $(".search_box").slideUp(500);
})