import React, { PropTypes } from 'react';
import NumberButton from '../NumberButton/NumberButton';
import OperatorButton from '../OperatorButton/OperatorButton';
import './CalculatorButtons.css';

const CalculatorButtons = ({ handleNumberPress, handleOperatorPress, handleDeletePress }) => {
	return (
		<div className="Calculator_Buttons">
			<div className="Calculator_Buttons_Row">
				<OperatorButton text="Delete" onClick={handleDeletePress} />
			</div>
			<div className="Calculator_Buttons_Row">
				<NumberButton text="7" onClick={handleNumberPress} />
				<NumberButton text="8" onClick={handleNumberPress} />
				<NumberButton text="9" onClick={handleNumberPress} />
				<OperatorButton text="/" onClick={handleOperatorPress} />
			</div>
			<div className="Calculator_Buttons_Row">
				<NumberButton text="4" onClick={handleNumberPress} />
				<NumberButton text="5" onClick={handleNumberPress} />
				<NumberButton text="6" onClick={handleNumberPress} />
				<OperatorButton text="x" onClick={handleOperatorPress} />
			</div>
			<div className="Calculator_Buttons_Row">
				<NumberButton text="1" onClick={handleNumberPress} />
				<NumberButton text="2" onClick={handleNumberPress} />
				<NumberButton text="3" onClick={handleNumberPress} />
				<OperatorButton text="-" onClick={handleOperatorPress} />
			</div>
			<div className="Calculator_Buttons_Row">
				<NumberButton text="0" onClick={handleNumberPress} />
				<OperatorButton text="=" onClick={handleOperatorPress} />
				<OperatorButton text="+" onClick={handleOperatorPress} />
			</div>
		</div>
	);
};

CalculatorButtons.propTypes = {
	handleNumberPress: PropTypes.func.isRequired,
	handleOperatorPress: PropTypes.func.isRequired,
	handleDeletePress: PropTypes.func.isRequired
};

export default CalculatorButtons;
