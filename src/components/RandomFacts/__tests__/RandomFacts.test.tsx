import React from 'react';
import { shallow } from 'enzyme';
import RandomFacts from '../RandomFacts';

describe('[RandomFacts]', () => {
    it('Should render RandomFacts component without error', () => {
        const component = shallow(<RandomFacts />);
        expect(component.getElements()).toMatchSnapshot();
    });
});
