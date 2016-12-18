import CalculatorDisplay from '../components/CalculatorDisplay/CalculatorDisplay';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return {
		text: state.display
	};
};

export default connect(mapStateToProps)(CalculatorDisplay);
