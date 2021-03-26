$(document).ready(()=> {
	$(window).scroll(()=> {
    if (this.scrollY > 20) {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
		if (this.scrollY > 20) {
			$('.go-up').addClass('active');
		} else {
			$('.go-up').removeClass('active');
		}
	});

	$('#menu').click(()=> {
		$('nav ul.menu').toggleClass('active');
	});

	$('ul.menu li a').click(()=> {
		$('nav ul.menu').removeClass('active');
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


// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
    	location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    	&& 
    	location.hostname == this.hostname
    	) {
      // Figure out element to scroll to
  var target = $(this.hash);
  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
        	scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
          	return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
        };
    });
    }
}
});


