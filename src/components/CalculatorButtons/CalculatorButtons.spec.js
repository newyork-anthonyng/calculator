import React from 'react';
import {
	shallow,
	mount
} from 'enzyme';
import renderer from 'react-test-renderer';
import CalculatorButtons from './CalculatorButtons';
import NumberButton from '../NumberButton/NumberButton';
import OperatorButton from '../OperatorButton/OperatorButton';

describe('CalculatorButtons', () => {
	it('should render', () => {
		const component = renderer.create(
			<CalculatorButtons
				handleNumberPress={() => {}}
				handleOperatorPress={() => {}}
				handleDeletePress={() => {}}
			/>
		);

		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('should render number buttons', () => {
		const wrapper = shallow(
			<CalculatorButtons
				handleNumberPress={() => {}}
				handleOperatorPress={() => {}}
				handleDeletePress={() => {}}
			/>
		);

		const numberButtons = wrapper.find(NumberButton);
		expect(numberButtons.length).toEqual(11);
	});

	it('should render operator buttons', () => {
		const wrapper = shallow(
			<CalculatorButtons
				handleNumberPress={() => {}}
				handleOperatorPress={() => {}}
				handleDeletePress={() => {}}
			/>
		);

		const operatorButtons = wrapper.find(OperatorButton);
		expect(operatorButtons.length).toEqual(6);
	});

	it('should run callback when number button is pressed', () => {
		const cb = jest.fn();
		const wrapper = mount(
			<CalculatorButtons
				handleNumberPress={cb}
				handleOperatorPress={() => {}}
				handleDeletePress={() => {}}
			/>
		);

		const number7Button = wrapper.find(NumberButton).at(0);
		number7Button.simulate('click');
		expect(cb.mock.calls[0][0]).toEqual('7');
	});

	it('should run callback when operator button is pressed', () => {
		const cb = jest.fn();
		const wrapper = mount(
			<CalculatorButtons
				handleNumberPress={() => {}}
				handleOperatorPress={cb}
				handleDeletePress={() => {}}
			/>
		);

		const divideButton = wrapper.find(OperatorButton).at(1);
		divideButton.simulate('click');
		expect(cb.mock.calls[0][0]).toEqual('/');
	});

	it('should run callback when delete button is pressed', () => {
		const cb = jest.fn();
		const wrapper = mount(
			<CalculatorButtons
				handleNumberPress={() => {}}
				handleOperatorPress={() => {}}
				handleDeletePress={cb}
			/>
		);

		const deleteButton = wrapper.find(OperatorButton).at(0);
		deleteButton.simulate('click');
		expect(cb.mock.calls[0][0]).toEqual('Delete');
	});
});
