import React from 'react';
import CalculatorDisplay from '../CalculatorDisplay/CalculatorDisplay';
import CalculatorButtons from '../CalculatorButtons/CalculatorButtons';

class Calculator extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			result: '0',
			currentNumber: '0',
			display: '0',
			currentOperation: null
		};
	}

	handleNumberPress = (num) => {
		const newNumber = '' + this.state.currentNumber + num;
		this.setState({
			currentNumber: newNumber
		}, () => this.updateDisplay(this.state.currentNumber));
	}

	handleOperatorPress = (op) => {
		const { result, currentNumber, currentOperation } = this.state;
		const newResult = this.calculateResult(result, currentNumber, currentOperation);

		this.setState({
			result: '' + newResult,
			currentOperation: op,
			currentNumber: '0'
		}, () => {
			console.log(this.state);
			if(op === '=') this.updateDisplay(this.state.result);
		});
	}

	calculateResult = (firstOperand, secondOperand, operator) => {
		switch(operator) {
			case '+': return parseInt(firstOperand, 10) + parseInt(secondOperand, 10);
			case '-': return parseInt(firstOperand, 10) - parseInt(secondOperand, 10);
			case 'x': return parseInt(firstOperand, 10) * parseInt(secondOperand, 10);
			case '/': return parseInt(firstOperand, 10) / parseInt(secondOperand, 10);
			case '=':
			default:
				return parseInt(firstOperand === '0' ? secondOperand : firstOperand, 10);
		}
	}

	updateDisplay = (text) => {
		this.setState({
			display: text
		});
	}

	render() {
		return (
			<div className="Calculator">
				<CalculatorDisplay text={this.state.display} />

				<CalculatorButtons
					handleNumberPress={this.handleNumberPress}
					handleOperatorPress={this.handleOperatorPress}
				/>
			</div>
		);
	}
};

export default Calculator;
