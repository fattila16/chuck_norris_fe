import React from 'react';
import { shallow } from 'enzyme';
import ToggleSwitch from '../ToggleSwitch';

describe('[ToggleSwitch]', () => {
    it('Should render ToggleSwitch component without error', () => {
        const component = shallow(<ToggleSwitch textTrue="RTL" textFalse="LTR" />);
        expect(component.getElements()).toMatchSnapshot();
    });

    it('Should render ToggleSwitch component with RTL text if checked is true', () => {
        const component = shallow(<ToggleSwitch checked={true} textTrue="RTL" textFalse="LTR" />);
        expect(component.text()).toMatch('RTL');
    });

    it('Should render ToggleSwitch component with LTR text if checked is false', () => {
        const component = shallow(<ToggleSwitch checked={true} textTrue="RTL" textFalse="LTR" />);
        expect(component.text()).toMatch('RTL');
    });
});
