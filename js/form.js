let formBtn = document.querySelector('.form__btn');
let formInput = document.querySelector('.form__input');

function inputOnFocus() {formInput.value = '';}
function inputOnBlur() {formInput.value = 'Write something';}
function showMessage(e) {
	let message = document.querySelector('.message');

	e.preventDefault();
	message.style.opacity = '1';
	formBtn.disabled = true;
	function hideMessage() {message.style.opacity = '0';}
	function cancelDisabled() {formBtn.disabled = false;}
	setTimeout(hideMessage, 3000);
	setTimeout(cancelDisabled, 3000);
}

formInput.addEventListener('focus', inputOnFocus);
formInput.addEventListener('blur', inputOnBlur);
formBtn.addEventListener('click', showMessage);