// Toggle navbar
const menuBar = document.querySelector('nav .bar-menu');
const menu = document.querySelector('nav .menu');
const icon = document.querySelector('nav .bar-menu .bx');
const allMenu = document.querySelectorAll('nav .menu a');

menuBar.addEventListener('click', function() {
	menu.classList.toggle('active');
	if (menu.classList.contains('active')) {
		icon.classList.replace('bx-menu', 'bx-x');
	} else {
		icon.classList.replace('bx-x', 'bx-menu');
	}
})

allMenu.forEach(all => {
	all.addEventListener('click', function() {
		menu.classList.remove('active');
		icon.classList.replace('bx-x', 'bx-menu');
	});
});






// Certificates navigation
const content = document.querySelector('#certificates .content');
const wrapper = document.querySelector('#certificates .content .wrapper');
const img = document.querySelectorAll('#certificates .content .wrapper img');
const left = document.querySelector('#certificates .content .arrow span.left');
const right = document.querySelector('#certificates .content .arrow span.right');
const indicatorWrapper = document.querySelector('#certificates .indicator');
let i = 0;
let len = content.offsetWidth;

for (let i = 0; i < img.length; i++) {
	let span = document.createElement('span');
	indicatorWrapper.appendChild(span);
}

const span = document.querySelectorAll('#certificates .indicator span');

wrapper.style.left = `${i * len}px`;
span[Math.abs(i)].classList.add('active');

left.addEventListener('click', function() {
	i = ((i + 1) - img.length) % img.length;
	wrapper.style.left = `${i * len}px`;
	for (let j = 0; j < span.length; j++) {
		span[j].classList.remove('active');
		span[Math.abs(i)].classList.add('active');
	}
});

right.addEventListener('click', function() {
	i = (i - 1) % img.length;
	wrapper.style.left = `${i * len}px`;
	for (let j = 0; j < span.length; j++) {
		span[j].classList.remove('active');
		span[Math.abs(i)].classList.add('active');
	}
});

for (let j = 0; j < span.length; j++) {
	span[j].addEventListener('click', function() {
		i = j * -1;
		wrapper.style.left = `${i * len}px`;
		for (let j = 0; j < span.length; j++) {
			span[j].classList.remove('active');
			span[Math.abs(i)].classList.add('active');
		}
	});
}







// Active Menu
const sections = document.querySelectorAll('section:not(#contact)');

window.addEventListener('scroll', function() {
	let current = '';
	sections.forEach( function(sect) {
		if (this.pageYOffset + 50 > sect.offsetTop) {
			current = sect.getAttribute('id');
		}
	});

	allMenu.forEach( function(nav) {
		nav.classList.remove('active');
		if (nav.classList.contains(current)) {
			nav.classList.add('active');
		}
	});
});