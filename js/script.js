$(document).ready(()=> {
	$(window).scroll(()=> {
		if (this.scrollY > 500) {
			$('.go-up').addClass('active');
		} else {
			$('.go-up').removeClass('active');
		}
	});

	$('#menu').click(()=> {
		$('nav ul.menu').toggleClass('active');
	});

	$('.go-up').click(()=> {
		$('html').animate({scrollTop:0});
	});
});


var options = {
	strings: ['Web Developer', 'Python Developer', 'Data Scientist', 'Logo Designer'],
	typeSpeed: 100,
	backSpeed: 80,
	loop: true,
};

var typed = new Typed('.typing', options);
var typed2 = new Typed('.typing2', options);
