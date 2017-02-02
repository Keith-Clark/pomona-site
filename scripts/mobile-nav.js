$(document).ready(function() {
	$('.mobile-menu').on('click', function(e) {
		$('.loaded').toggleClass('nav-visible');
	});
  var action = 1;
  $('.mobile-menu').on("click", viewSomething);
  function viewSomething() {
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
