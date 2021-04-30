// Typed
let options = {
  strings: ['Web Designer', 'Web Developer'],
  typeSpeed: 80,
  backSpeed: 50,
  loopCount: Infinity,
  loop:true
};

let typed = new Typed('#typed', options);


// Menu Bar
const menuBar = document.querySelector('nav .menu-bar');
const menu = document.querySelector('nav ul.menu');

menuBar.addEventListener('click', function () {
	menu.classList.toggle('active');
	if (menu.classList.contains('active')) {
		document.querySelector('nav .menu-bar .fas').classList.replace('fa-bars', 'fa-times');
	} else {
		document.querySelector('nav .menu-bar .fas').classList.replace('fa-times', 'fa-bars');
	}
});

const section = document.querySelectorAll('header, section, footer');
const navItem = document.querySelectorAll('nav ul.menu li:not(.sosmed) a');

window.addEventListener('scroll', function () {
	if (this.scrollY > 20) {
		document.querySelector('nav').classList.add('active');
	} else {
		document.querySelector('nav').classList.remove('active');
	}

	let current = '';
	section.forEach( function(sect) {
		if (this.pageYOffset+20 > sect.offsetTop) {
			current = sect.getAttribute('id');
		}
	});

	navItem.forEach( function(nav) {
		nav.classList.remove('active');
		if (nav.classList.contains(current)) {
			nav.classList.add('active');
		}
	});

});


const closeBtn = document.querySelectorAll('body > .modal .head span.close');
const modal = document.querySelectorAll('body > .modal');
const works = document.querySelectorAll('section#work .work');

works.forEach( function(work) {
	work.addEventListener('click', function () {
		document.querySelector('.modal'+work.dataset.target).classList.add('active');
	});
});

for (let i=0; i<closeBtn.length; i++) {
	closeBtn[i].addEventListener('click', function () {
		modal[i].classList.remove('active');
	});
}



// Menu bar Close
for (let i=0; i<navItem.length; i++) {
	navItem[i].addEventListener('click', function () {
		menu.classList.remove('active');
		document.querySelector('nav .menu-bar .fas').classList.replace('fa-times', 'fa-bars');
	});
}
