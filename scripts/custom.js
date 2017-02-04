/*mobile nav menu*/
$(document).ready(function() {
	$('.mobile-menu').on('click', function(e) {
		$('.loaded').toggleClass('nav-visible');
	});
  var action = 1;
  $('.mobile-menu').on("click", navPullout);
  function navPullout() {
    if ( action == 1 ) {
        $('.nav-mobile').removeClass('collapse');
        action = 2;
    } else {
			  setTimeout(function(){
				  $('.nav-mobile').addClass('collapse');
			  }, 500);
        action = 1;
    }
  }
});
/*mobile touch hover*/
$(document).ready(function() {
    $('.icon-logo').bind('touchstart touchend', function(e) {
        e.preventDefault();
        $(this).toggleClass('.icon-logo:hover');
    });
});
