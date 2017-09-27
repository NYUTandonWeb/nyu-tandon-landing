export function menu() {

	$('.logo').on('click', function(){
		console.log('fuck u');

		$('.overlay').toggleClass('open');

	});

	$('.overlay-close').on('click', function(){
		console.log('suckit');

		$('.overlay').removeClass('open');

	});



};