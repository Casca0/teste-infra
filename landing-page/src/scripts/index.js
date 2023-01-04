// Função para mostrar resposta da questão quando tal foi clicada;

const questionsArrows = [...document.querySelectorAll('.infra-questions-arrow')];

questionsArrows.forEach(element => {
	element.addEventListener('click', (e) => {
		const awnswer = e.path[2].querySelector('.infra-questions-awnswers');
		const arrow = e.path[0];

		arrow.classList.toggle('--active-arrow');
		awnswer.classList.toggle('--active-awnswer');
	})
});

// Função para esconder a barra do cookie

const cookieBar = document.querySelector('.infra-cookie');
const cookieAcceptButton = document.querySelector('#infra-cookie-accept');

const checkForCookie = localStorage.getItem('hideCookieBar');

if (checkForCookie) {
	cookieBar.classList.add('--disabled');
}

function cookieHide() {
	localStorage.setItem('hideCookieBar', true);
	cookieBar.classList.add('--disabled');
}

cookieAcceptButton.addEventListener('click', () => {
	cookieHide();
});