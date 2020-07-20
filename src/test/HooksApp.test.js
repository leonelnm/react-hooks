import '@testing-library/jest-dom'
import React from 'react'
import { shallow } from 'enzyme';
import { HooksApp } from '../HooksApp';

describe('pruebas <HooksApp />', () => {
	
	test('should show component', () => {
		const wrapper = shallow(<HooksApp />)

		expect(wrapper).toMatchSnapshot();
	})
	

})
