import React, { useState } from 'react';
import './style.scss';

const keypadValues = [
	['C', '+-', '%', '/'],
	[7, 8, 9, 'X'],
	[4, 5, 6, '-'],
	[1, 2, 3, '+'],
	['.', 0, '=']
];

function toLocaleString(num) {
	return String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1 ');
}

function removeSpaces(num) {
	return num.toString().replace(/\s/g, '');
}

function calculate(a, b, sign) {
	switch (sign) {
	case '+':
		return a + b;
	case '-':
		return a - b;
	case 'X':
		return a * b;
	default:
		return a / b;
	}
}

function Calculator() {

	let [calc, setCalc] = useState({
		sign: '',
		num: 0,
		res: 0,
	});

	function numClickHandler(e) {
		e.preventDefault();
		const value = e.target.innerHTML;

		if (removeSpaces(calc.num).length < 16) {
			setCalc({
				...calc,
				num:
				calc.num === 0 && value === '0'
					? '0'
					: removeSpaces(calc.num) % 1 === 0
						? toLocaleString(Number(removeSpaces(calc.num + value))) 
						: toLocaleString(calc.num + value),
				res: !calc.sign ? 0 : calc.res,
			});
		}
	}

	function commaClickHandler(e) {
		e.preventDefault();
		const value = e.target.innerHTML;

		setCalc({
			...calc,
			num: !calc.num.toString().includes('.') ? calc.num + value : calc.num
		});
	}

	function signClickHandler(e) {
		e.preventDefault();
		const value = e.target.innerHTML;

		setCalc({
			...calc,
			sign: value,
			res: !calc.res && calc.num ? calc.num : calc.res,
			num: 0,
		});
	}

	function equalsClickHandler() {
		if (calc.sign && calc.num) {
			setCalc({
				...calc,
				res:
				calc.num === '0' && calc.sign === '/'
					? 'Impossível dividir por 0'
					: toLocaleString(
						calculate(
							Number(removeSpaces(calc.res)),
							Number(removeSpaces(calc.num)),
							calc.sign
						)
					),
				sign: '',
				num: 0,
			});
		}
	}

	function invertClickHandler() {
		setCalc({
			...calc,
			num: calc.num ? toLocaleString(removeSpaces(calc.num) * -1) : 0,
			res: calc.res ? toLocaleString(removeSpaces(calc.res) * -1) : 0,
			sign: '', 
		});
	}

	function percentClickHandler() {
		const num = calc.num ? parseFloat(removeSpaces(calc.num)) : 0;
		const res = calc.res ? parseFloat(removeSpaces(calc.res)) : 0;

		setCalc({
			...calc,
			num: (num / 100),
			res: (res / 100),
			sign: '',
		});
	}

	function resetClickHandler() {
		setCalc({
			...calc,
			num: 0,
			res: 0,
			sign: '',
		});
	}

	function clickHandler(btn) {
		switch (btn) {
		case 'C':
			return resetClickHandler;
		case '+-':
			return invertClickHandler;
		case '%':
			return percentClickHandler;
		case '=':
			return equalsClickHandler;
		case '/':
		case 'X':
		case '-':
		case '+':
			return signClickHandler;
		case '.':
			return commaClickHandler;
		default:
			return numClickHandler;
		}
	}

	return (
		<div className="infra-calc__wrapper">
			<div className="infra-calc__screen">
				{calc.num ? calc.num : calc.res}
			</div>
			<div className="infra-calc__button-wrapper">
				{
					keypadValues.flat().map((btn, i) => {
						return (
							<button key={i} className={btn === '=' ? 'infra-calc__button__equals' : 'infra-calc__button'} value={btn} onClick={clickHandler(btn)}>
								{btn}
							</button>
						);
					})
				}
			</div>
		</div>
	);
}

export default Calculator;
