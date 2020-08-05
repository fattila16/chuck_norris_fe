import React from 'react';
import { shallow } from 'enzyme';
import Navbar from '../Navbar';

describe('[Navbar]', () => {
    it('Should render Navbar component without error', () => {
        const component = shallow(<Navbar />);
        expect(component.getElements()).toMatchSnapshot();
    });
});
