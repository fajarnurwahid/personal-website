// Navbar toggle
const icon = document.querySelector('i.navbar-toggler');

icon.addEventListener('click', function () {
	this.classList.contains('collapsed') ? this.classList.replace('bx-x', 'bx-menu') : this.classList.replace('bx-menu', 'bx-x');
});



// Active Menu
const allMenu = document.querySelectorAll('nav .navbar-nav a');
const sections = document.querySelectorAll('section:not(#contact)');

window.addEventListener('scroll', function() {
	let current = '';
	sections.forEach( function(sect) {
		if (this.pageYOffset + 50 > sect.offsetTop) {
			current = sect.getAttribute('id');
		}
	});

	allMenu.forEach(function(nav) {
		nav.classList.remove('active');
		if (nav.classList.contains(current)) {
			nav.classList.add('active');
		}
	});
});



// Loading
const loader = $('.loading');
$(window).on('load', function() {
	loader.fadeOut();
});




// Typed js
let options = {
  strings: ['Web Designer', 'Web Developer'],
  typeSpeed: 70,
  backSpeed: 50,
  smartBackspace: false,
  backDelay: 2000,
  loop: true,
};

let typed = new Typed('.typed', options);
