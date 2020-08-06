import React from 'react';
import { shallow } from 'enzyme';
import Hamburger from '../Hamburger';

describe('[Hamburger]', () => {
    it('Should render Hamburger with classNames: hamburger open, if open is true', () => {
        const component = shallow(<Hamburger open={true} setOpen={jest.fn()} />);
        expect(component.getElements()).toMatchSnapshot();
    });

    it('Should render Hamburger with classNames: hamburger, if open is false', () => {
        const component = shallow(<Hamburger open={false} setOpen={jest.fn()} />);
        expect(component.getElements()).toMatchSnapshot();
    });
});
