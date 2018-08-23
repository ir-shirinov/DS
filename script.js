var openLetter = document.querySelector('.about-us-contacts button');
var openMap = document.querySelector('.map-container');
var modalLetter = document.querySelector('.modal-letter');
var modalMap = document.querySelector('.modal-map');
var close = document.querySelectorAll('.close');

var nameUser = document.querySelector('#user-name');
var saveName = localStorage.getItem('name');
var emailUser = document.querySelector('#user-email');
var saveEmail = localStorage.getItem('email');
var btnSubmit = document.querySelector('.modal-letter [type=submit]');

openLetter.addEventListener('click', function(evt){
	modalLetter.classList.add('show');

	if (saveName && saveEmail) {
		nameUser.value = saveName;
		emailUser.value = saveEmail;
	} else {
		nameUser.focus();
	};
});

openMap.addEventListener('click', function(evt){
	evt.preventDefault();
	modalMap.classList.add('show');
});

for (var i=0; i<close.length;i++) {
	close[i].addEventListener('click', function(evt){
	if (modalLetter.classList.contains('show')) {
		modalLetter.classList.remove('show');
	};
	if (modalMap.classList.contains('show')) {
		modalMap.classList.remove('show');
	};
});
};

btnSubmit.addEventListener('click', function (evt) {
	evt.preventDefault();
	if (nameUser.value) {
		localStorage.setItem('name',nameUser.value);
	};
	if (emailUser.value) {
		localStorage.setItem('email',emailUser.value);
	};
});

window.addEventListener('keydown', function (evt){
	if (evt.keyCode === 27) {
		if (modalLetter.classList.contains('show')) {
			modalLetter.classList.remove('show');
		};

		if (modalMap.classList.contains('show')) {
			modalMap.classList.remove('show');
		};
	};
});
