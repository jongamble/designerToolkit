jQuery(document).ready(function($) {
	$('.img-rollover').on(
		{
			mouseenter: function(){
				$(this).addClass('is-hovered');
			},
			mouseleave: function(){
				$(this).removeClass('is-hovered');
			}
		}
	);

});