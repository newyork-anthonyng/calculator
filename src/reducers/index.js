import {
	UPDATE_CURRENT_NUMBER,
	UPDATE_CURRENT_OPERATOR,
	CALCULATE_RESULT
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
			return parseInt(firstOperand === '0' ? secondOperand : firstOperand, 10);
	}
}

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case UPDATE_CURRENT_NUMBER:
			return {
				...state,
				currentOperand: action.number,
				display: '' + action.number
			};
		case UPDATE_CURRENT_OPERATOR:
			const newResult = calculateResult(state.result, state.currentOperand, state.currentOperator);
			const newDisplay = action.operator === '=' ? '' + newResult : state.display;

			return {
				display: newDisplay,
				result: newResult,
				currentOperand: 0,
				currentOperator: action.operator
			};
		case CALCULATE_RESULT:
			return {
				...state,
			};
		default:
			return state;
	}
};

export default reducer;
