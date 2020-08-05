import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from '../SearchBar';

describe('[SearchBar]', () => {
    it('Should render SearchBar component without error', () => {
        const component = shallow(<SearchBar />);
        expect(component.getElements()).toMatchSnapshot();
    });
});
