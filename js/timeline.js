$(".nav-box").click(function(){
		var $timeline_block = $('.cd-timeline-block');

		//hide timeline blocks which are outside the viewport
		$timeline_block.each(function(){
				$(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		});

		//on scolling, show/animate timeline blocks when enter the viewport
		
});

$(document).ready(function(){
	$(window).on('scroll', function(){
		var $timeline_block = $('.cd-timeline-block');
		$timeline_block.each(function(){
			if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
				$(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
			}
		});
	});
});