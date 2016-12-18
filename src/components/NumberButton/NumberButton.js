import React, { PropTypes } from 'react';
import Button from '../Button/Button';

const NumberButton = ({ text, onClick }) => (
	<Button
		style={{ backgroundColor: '#434542' }}
		text={text}
		onClick={onClick}
	/>
);

NumberButton.propTypes = {
	text: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
};

export default NumberButton;
