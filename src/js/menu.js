export function menu() {

	$('button.hamburger').on('click', function(){

		$(this).toggleClass('is-active');

		$('.overlay').toggleClass('open');

		$('.secondary').toggleClass('open');



		if  ($(this).hasClass('menu')){

			$('.caret').addClass("d-none");

			$('.nav-close').addClass("d-none");

			$('.featured-story').removeClass('d-none');

			$('.secondary-menu').removeClass('active');

			$('button.hamburger.is-active').removeClass('menu');

			$('a.nav-link').removeClass('active');

		} else {


		}

	});


	$('a[data-toggle="pill"]').on('shown.bs.tab', function (e) {

		$('button.hamburger').toggleClass('menu');

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

		$('a.collapsed').addClass('menu-active');

		$(this).find('.caret').addClass('show');

		$(this).find('.caret').removeClass('hide');

	});

	$('.card').on('hide.bs.collapse', function () {

		$(this).find('.caret').removeClass('show');

		$(this).find('.caret').addClass('hide');

	});

	$('.card').on('hidden.bs.collapse', function () {

		$(this).find('.caret').removeClass('show');

		$(this).find('.caret').addClass('hide');

	});

};