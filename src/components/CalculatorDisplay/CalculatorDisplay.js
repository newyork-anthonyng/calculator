import React, { PropTypes } from 'react';
import './CalculatorDisplay.css';

const CalculatorDisplay = ({ text }) => (
	<div className="Calculator_Display">
		<span>{text}</span>
	</div>
);

CalculatorDisplay.propTypes = {
	text: PropTypes.string.isRequired
};

export default CalculatorDisplay;
