import React, { PropTypes } from 'react';
import './Button.css';

const Button = ({ text, onClick, style }) => (
	<div
		style={style}
		className="Button"
		onClick={() => onClick(text)}
	>
		{text}
	</div>
);

Button.propTypes = {
	text: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	style: PropTypes.object
};

export default Button;
