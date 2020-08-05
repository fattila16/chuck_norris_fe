import React from 'react';
import { shallow } from 'enzyme';
import ToggleSwitch from '../ToggleSwitch';

describe('[ToggleSwitch]', () => {
    it('Should render ToggleSwitch component without error', () => {
        const component = shallow(<ToggleSwitch />);
        expect(component.getElements()).toMatchSnapshot();
    });
});
