export function menu() {

	$('.logo').on('click', function(){

		$('.overlay').toggleClass('open');

	});

	$('.overlay-close').on('click', function(){

		if  ($(this).hasClass('menu')){

			$('.caret').addClass("d-none");

			$('.nav-close').addClass("d-none");

			$('.featured-story').removeClass('d-none');

			$('.secondary-menu').removeClass('active');

			$('.overlay-close').removeClass('menu');

			$('a.nav-link').removeClass('active');

		} else {

			$('.overlay').removeClass('open');

		}

	});

	$('a[data-toggle="pill"]').on('shown.bs.tab', function (e) {

		$('.overlay-close').addClass('menu');

		$('.nav-close').removeClass("d-none");

		$('.tab-content').removeClass('d-none');

		$('.featured-story').addClass('d-none');

		$('.secondary-menu').addClass('active');

   		$(this).parent().find('.caret').removeClass("d-none");

	});

	$('a[data-toggle="pill"]').on('hidden.bs.tab', function (e) {

   		$(this).parent().find('.caret').addClass("d-none");

	});

// $('#accordion').collapse({
//   toggle: true
// });



	$('.card').on('show.bs.collapse', function (e) {

	  $(this).find('.caret').addClass('show');

	  $(this).find('.caret').removeClass('hide');

	});

	$('.card').on('hide.bs.collapse', function () {

	  $(this).find('.caret').removeClass('show');

	  $(this).find('.caret').addClass('hide');

	});

};