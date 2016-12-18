import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Button from './Button';

describe('Button', () => {
	it('should render', () => {
		const component = renderer.create(
			<Button
				text="+"
				onClick={() => {}}
				style={{}}
			/>
		);

		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('should run callback when clicked', () => {
		const cb = jest.fn();
		const wrapper = shallow(
			<Button
				text="foo"
				onClick={cb}
				style={{}}
			/>
		);

		wrapper.simulate('click');
		expect(cb.mock.calls[0][0]).toEqual('foo');
	});

	it('should accept a style object', () => {
		const style = {
			backgroundColor: 'yellow'
		};
		const wrapper = shallow(
			<Button
				text="foo"
				onClick={() => {}}
				style={style}
			/>
		);

		const buttonStyle = wrapper.prop('style');
		expect(buttonStyle).toEqual(style);
	});
});
