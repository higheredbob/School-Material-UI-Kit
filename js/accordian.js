
$(".sm-accordian .accord-tab .accord-head").first().addClass("show");
$(".sm-accordian .accord-tab .accord-head").first().next().show();
$(".sm-accordian .accord-tab .accord-head").click(function(){
  if($(this).hasClass("show"))
    {
      $(this).removeClass("show");
      $(this).next().slideUp();
    }
  else
    {
      $(".sm-accordian .accord-tab .accord-head").removeClass("show");
      $(".sm-accordian .accord-tab .accord-head").next().slideUp();
      $(this).addClass("show");
      $(this).next().slideDown();
    }
});
