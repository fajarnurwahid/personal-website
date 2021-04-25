const navItem = document.querySelectorAll('section#header nav ul.menu li a');
const section = document.querySelectorAll('body > section');

// Scrolling
window.addEventListener('scroll', function () {
	if (this.scrollY > 20) {
		document.querySelector('section#header nav').classList.add('active');
	} else {
		document.querySelector('section#header nav').classList.remove('active');
	}

	let current = '';
	section.forEach(sect => {
		let sectTop = sect.offsetTop;
		if (this.pageYOffset + 80 > sectTop) {
			current = sect.getAttribute('id');
		}
	});
	
	navItem.forEach(nav => {
		nav.classList.remove('active');
		if (nav.classList.contains(current)) {
			nav.classList.add('active');
		}
	});
});




// Menu Bar
const menuBar = document.querySelector('section#header nav .menu-bar');
const iconBar = document.querySelector('section#header nav .menu-bar .fas');
const menu = document.querySelector('section#header nav ul.menu');
const menuLinks = document.querySelectorAll('section#header nav ul.menu li a');
const sosmed = document.querySelector('section#header nav .sosmed');

menuBar.addEventListener('click',()=> {
	menu.classList.toggle('active');
	sosmed.classList.toggle('active');
	if (menu.classList.contains('active')) {
		iconBar.classList.replace('fa-bars', 'fa-times');
	} else {
		iconBar.classList.replace('fa-times', 'fa-bars');
	}
})

menuLinks.forEach(menuLink => {
	menuLink.addEventListener('click', function () {
		menu.classList.remove('active');
		iconBar.classList.replace('fa-times', 'fa-bars');
	});
});



// Modal
const works = document.querySelectorAll('section#work .work');
const closeBtn = document.querySelectorAll('.modal .head .close');
const modal = document.querySelectorAll('.modal');

for(let i=0; i<closeBtn.length; i++) {
	closeBtn[i].addEventListener('click', function () {
		modal[i].classList.remove('active');
	});
}

works.forEach(work => {
	work.addEventListener('click', function () {
		document.querySelector('.modal'+this.dataset.target).classList.add('active');
	});
});



// Typed
let options = {
  strings: ['Web Designer', 'Web Developer', 'Python Developer'],
  typeSpeed: 80,
  backSpeed: 50,
  loopCount: Infinity,
  loop:true
};

let typed = new Typed('#typed', options);