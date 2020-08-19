let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	let i;
	let slides = document.querySelectorAll('.carousel__slide');
	let switcher = document.querySelectorAll('.carousel__switcher');

	if(n > slides.length) {slideIndex = 1}
	if(n < 1) {slideIndex = slides.length}
	for(i = 0; i < slides.length; i++) {
		slides[i].style.opacity = '0';
	}
	for(i = 0; i < switcher.length; i++) {
		switcher[i].classList.remove('selected');
	}
	slides[slideIndex -1].style.opacity = '1';
	switcher[slideIndex -1].classList.add('selected');
}