function render_mobile() {
	if ($(window).width() < 768) {
		$('.nav-tab a').on('click', function(e) {
			var $this = $(this),
				navList = $(this).closest('.nav-list');
			if (navList.hasClass('open')) {} else {
				e.preventDefault();
				e.stopPropagation();
				navList.addClass('open');
			}
		});
	}
	if ($(window).width() < 1025) {
		$('.header-cat-list').detach().appendTo('.nav-mobile');
	} else {
		$('.mobile-menu').removeClass('active');
	}
}
$(document).ready(function() {
	$(window).resize(function() {
		render_mobile();
	});
	$('body').on('click', function() {
		$('.nav-list').removeClass('open');
		$('.nav-mobile').removeClass('active');
	});
	$('body').scrollspy({
		target: '#detailNav',
		offset: 20
	});
	$('.mobile-menu').on('click', function(e) {
		e.stopPropagation();
		$('.nav-mobile').addClass('active');
	});
	$('.nav-mobile').on('click', function(e) {
		e.stopPropagation();
	});
	$('.nav-mobile-close').on('click', function(e) {
		e.stopPropagation();
		$('.nav-mobile').removeClass('active');
	});
});
