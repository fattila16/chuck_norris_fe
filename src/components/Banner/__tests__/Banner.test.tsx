import React from 'react';
import { shallow } from 'enzyme';
import Banner from '../Banner';

describe.only('[Banner]', () => {
    it('Should render Banner component without error', () => {
        const component = shallow(<Banner />);
        expect(component.getElements()).toMatchSnapshot();
    });
});
