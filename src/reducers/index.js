import {
	UPDATE_CURRENT_NUMBER,
	UPDATE_CURRENT_OPERATOR,
	DELETE_CURRENT_NUMBER
} from '../actions/index';

const initialState = {
	display: '0',
	result: 0,
	currentOperand: 0,
	currentOperator: null
};

const calculateResult = (firstOperand, secondOperand, operator) => {
	switch(operator) {
		case '+': return parseInt(firstOperand, 10) + parseInt(secondOperand, 10);
		case '-': return parseInt(firstOperand, 10) - parseInt(secondOperand, 10);
		case 'x': return parseInt(firstOperand, 10) * parseInt(secondOperand, 10);
		case '/': return parseInt(firstOperand, 10) / parseInt(secondOperand, 10);
		case '=':
		default:
			
			return parseInt(firstOperand == '0' ? secondOperand : firstOperand, 10);
	}
}

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case UPDATE_CURRENT_NUMBER:
			const newNumber = '' + state.currentOperand + action.number;

			return {
				...state,
				currentOperand: newNumber,
				display: newNumber
			};
		case UPDATE_CURRENT_OPERATOR:
			const newResult = calculateResult(state.result, state.currentOperand, state.currentOperator);
			const newDisplay = '' + newResult;

			return {
				display: newDisplay,
				result: newResult,
				currentOperand: 0,
				currentOperator: action.operator
			};
		case DELETE_CURRENT_NUMBER:
			return {
				...state,
				currentOperand: 0,
				display: '0'
			};
		default:
			return state;
	}
};

export default reducer;
