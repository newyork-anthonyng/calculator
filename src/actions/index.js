export const UPDATE_CURRENT_NUMBER = 'UPDATE_CURRENT_NUMBER';
export const UPDATE_CURRENT_OPERATOR = 'UPDATE_CURRENT_OPERATOR';

export const updateCurrentNumber = (number) => {
	return {
		type: UPDATE_CURRENT_NUMBER,
		number
	};
};

export const updateCurrentOperator = (operator) => {
	return {
		type: UPDATE_CURRENT_OPERATOR,
		operator
	};
};
