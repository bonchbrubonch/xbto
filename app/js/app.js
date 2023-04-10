$(function(){

  
  if($(window).width() < 900) {
    $(".footer__menu-title").on("click", function () {
      $(this).next().slideToggle();
      $(this).toggleClass("active");
    });
  }

  $(".hamburger").on("click", function () {
    $(".hamburger").toggleClass("open");
    $(".header__menu").toggleClass("active");
    $("body").toggleClass("lock");
  });

  /*стилизация селектов*/ 
  if ($('.speak__form-select').length > 0){
    $(function() {
      $('select').styler();
    });
  }


 $(".quiz__btn").on("click", function () {
   $(".quiz__btn").removeClass("active");
   $(this).addClass("active");
  });


  /*прогресс бар*/ 
  $(".circle_percent").each(function() {
    var $this = $(this),
		$dataV = $this.data("percent"),
		$dataDeg = $dataV * 3.6,
		$round = $this.find(".round_per");
	$round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");	
	$this.append('<div class="circle_inbox"><span class="percent_text"></span></div>');
	$this.prop('Counter', 0).animate({Counter: $dataV},
	{
		duration: 2000, 
		easing: 'swing', 
		step: function (now) {
            $this.find(".percent_text").text(Math.ceil(now)+"%");
        }
    });
	if($dataV >= 51){
		$round.css("transform", "rotate(" + 360 + "deg)");
		setTimeout(function(){
			$this.addClass("percent_more");
		},1000);
		setTimeout(function(){
			$round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
		},1000);
	} 
});


});

