$(document).ready(function() {
	$('.mobile-menu').on('click', function(e) {
		$('.loaded').toggleClass('nav-visible');
		$('.nav-mobile').removeClass('hidden');
		e.stopPropagation();
	});
});
