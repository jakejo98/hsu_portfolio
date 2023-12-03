var ui_ct_id = 1;

  $(".upn > img").click(function(){
    ui_ct_id++;
    $("#ct_tab_box"+ui_ct_id+"").addClass("ct_tab_box_active").siblings(".ct_tab_box").removeClass("ct_tab_box_active");
    $("#ci_tab_box"+ui_ct_id+"").addClass("ci_tab_box_active").siblings(".ci_tab_box").removeClass("ci_tab_box_active");
  })
  
  $(".upp > img").click(function(){
    ui_ct_id--;
    $("#ct_tab_box"+ui_ct_id+"").addClass("ct_tab_box_active").siblings(".ct_tab_box").removeClass("ct_tab_box_active");
    $("#ci_tab_box"+ui_ct_id+"").addClass("ci_tab_box_active").siblings(".ci_tab_box").removeClass("ci_tab_box_active");
  })