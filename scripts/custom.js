/*mobile nav menu*/
$(document).ready(function() {
  var action = 1;
  $('.mobile-menu').on("click", navExpand);
  function navExpand() {
    if ( action == 1 ) {
        $('.loaded').addClass('nav-visible');
        $('.nav-mobile').removeClass('collapse');
        event.stopPropagation();
        action = 2;
    } else {}
  }
	$('body').on("click", navCollapse);
  function navCollapse() {
    if ( action == 2 ) {
      $('.loaded').toggleClass('nav-visible');
			setTimeout(function(){
				$('.nav-mobile').addClass('collapse');
			}, 500);
			action = 1;
    } else {}
  }
	$(window).resize(function(){
	if ($(window).width() >= 992){
		if ( action == 2 ) {
        $('.loaded').toggleClass('nav-visible');
        $('.nav-mobile').addClass('collapse');
        action = 1;
    } else {}
	}
});
});
/*mobile touch hover*/
$(document).ready(function() {
    $('.logo').bind('touchstart touchend', function(e) {
        e.preventDefault();
        $(this).toggleClass('.logo:hover');
    });
});
