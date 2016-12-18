import React, { PropTypes } from 'react';
import Button from '../Button/Button';

const OperatorButton = ({ text, onClick }) => (
	<Button
		style={{ backgroundColor: '#202020' }}
		text={text}
		onClick={onClick}
	/>
);

OperatorButton.propTypes = {
	text: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
};

export default OperatorButton;
