import React from 'react';
import CalculatorDisplayContainer from '../../containers/CalculatorDisplayContainer';
import CalculatorButtonsContainer from '../../containers/CalculatorButtonsContainer';

class Calculator extends React.Component {
	render() {
		return (
			<div className="Calculator">
				<CalculatorDisplayContainer />
				<CalculatorButtonsContainer />
			</div>
		);
	}
};

export default Calculator;
