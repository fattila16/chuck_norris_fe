import React from 'react';
import { shallow } from 'enzyme';
import HomePage from '../index';

describe('[HomePage]', () => {
    it('Should render HomePage component without error', () => {
        const component = shallow(<HomePage />);
        expect(component.getElements()).toMatchSnapshot();
    });
});
