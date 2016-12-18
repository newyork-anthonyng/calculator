import React from 'react';
import renderer from 'react-test-renderer';
import CalculatorDisplay from './CalculatorDisplay';

describe('CalculatorDisplay', () => {
	it('should render', () => {
		const component = renderer.create(
			<CalculatorDisplay text="178" />
		);

		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
