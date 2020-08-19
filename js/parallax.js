let canvas = document.querySelector('.block-two');

canvas.addEventListener('mousemove', function(e) {
	let x = e.clientX / window.innerWidth;
	let y = e.clientY / window.innerHeight;
	let heart = document.querySelectorAll('.elements__box');
	let redHeart = document.querySelector('.red');

	for(let i = 0; i < heart.length; i++) {
		heart[i].style.transform = 'translate(' + x * 60 + 'px, ' + y * 50 + 'px)';
	}
	redHeart.style.transform = 'translate(' + x * 40 + 'px, ' + y * 100 + 'px)';
});