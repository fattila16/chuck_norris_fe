import React from 'react';
import { shallow } from 'enzyme';
import Categories from '../Categories';

describe('[Categories]', () => {
    it('Should render Categories component without error', () => {
        const component = shallow(<Categories />);
        expect(component.getElements()).toMatchSnapshot();
    });
});
