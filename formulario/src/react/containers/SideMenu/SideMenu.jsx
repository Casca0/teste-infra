import React from 'react';
import './style.scss';

function SideMenu() {
	return (
		<div className="infra-sidemenu__wrapper">
			<div className="infra-sidemenu__header">
				<h3>ACOMPANHAR PEDIDO</h3>
			</div>
			<div className="infra-sidemenu__nav">
				<nav>
					<ul>
						<li>COMPRA</li>
						<li>GUIA DE TAMANHOS</li>
						<li>MINHA CONTA</li>
						<li>POLÍTICA DE PAGAMENTO</li>
						<li>POLÍTICA DE ENTREGA</li>
						<li>TROCA E DEVOLUÇÕES</li>
						<li>CUIDADOS COM OS PRODUTOS</li>
						<li className='active'>CONTATO</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}

export default SideMenu;
