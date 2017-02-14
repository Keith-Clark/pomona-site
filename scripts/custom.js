/*mobile nav menu*/
$(document).ready(function() {
  var action = 1;
  $('.mobile-menu').on("touchend click", navExpand);
  function navExpand() {
    if ( action == 1 ) {
        $('.loaded').addClass('nav-visible');
        $('.nav-mobile').removeClass('collapse');
        event.stopPropagation();
        event.preventDefault();
        action = 2;
    } else {}
  }
	$('body').on("touchend click", navCollapse);
  function navCollapse() {
    if ( action == 2 ) {
      $('.loaded').toggleClass('nav-visible');
			setTimeout(function(){
				$('.nav-mobile').addClass('collapse');
			}, 500);
      event.preventDefault();
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
