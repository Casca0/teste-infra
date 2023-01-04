import React from 'react';
import './style.scss';

function Form() {
	return (
		<div className="infra-form__wrapper">
			<section className="infra-form__header">
				<h3>CONTATO</h3>
				<p>Nosso atendimento ao cliente funciona de segunda à sábado - 24hs, domingo até as 08hs (horario de Brasília) exceto feriados.</p>
				<h3>LOJA ONLINE</h3>
				<div className="infra-form__contacts">
					<p id='phone'><strong>Telefone: </strong>(11) 4935-2398</p>
					<p id='email'><strong>Email: </strong>contato@armaniexchange.com.br</p>
				</div>
			</section>
			<div className="infra-form__main">
				<h5>ENVIE UMA MENSAGEM</h5>
				<form action='POST'>
					<div>
						<label htmlFor="name">NOME:</label>
						<input type="text" name="name" id="name" />
					</div>
					<div>
						<label htmlFor="surname">SOBRENOME:</label>
						<input type="text" name="surname" id="surname" />
					</div>
					<div id='infra-form__email-box'>
						<label htmlFor="email">E-MAIL:</label>
						<input type="email" name="email" id="email" />
					</div>
					<div>
						<label htmlFor="phone">TELEFONE:</label>
						<input type="tel" name="phone" id="phone" />
					</div>
					<div>
						<label htmlFor="cellphone">CELULAR:</label>
						<input type="tel" name="cellphone" id="cellphone" />
					</div>
					<div id='infra-form__optionbox'>
						<label htmlFor="type">TIPO DE SOLICITAÇÃO:</label>
						<select name="type" id="type">
							<option value="Dúvida" selected>Dúvida</option>
							<option value="Reclamação">Reclamação</option>
						</select>
					</div>
					<div id="infra-form__messagebox">
						<label htmlFor="message">MENSAGEM:</label>
						<textarea name="message" id="message" cols="30" rows="10" ></textarea>
					</div>
					<button type="submit">ENVIAR</button>
				</form>
			</div>
		</div>
	);
}

export default Form;
