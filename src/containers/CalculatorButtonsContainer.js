import {
	updateCurrentNumber,
	updateCurrentOperator,
	deleteCurrentNumber
} from '../actions/index';
import CalculatorButtons from '../components/CalculatorButtons/CalculatorButtons';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
	return {
		handleNumberPress: (number) => {
			dispatch(updateCurrentNumber(number));
		},
		handleOperatorPress: (operator) => {
			dispatch(updateCurrentOperator(operator));
		},
		handleDeletePress: () => {
			dispatch(deleteCurrentNumber());
		}
	};
};

export default connect(
	undefined,
	mapDispatchToProps
)(CalculatorButtons);
