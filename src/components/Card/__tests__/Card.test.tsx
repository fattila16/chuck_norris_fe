import React from 'react';
import { shallow } from 'enzyme';
import Card from '../Card';

describe('[Card]', () => {
    it('Should render Card component without error', () => {
        const component = shallow(<Card img="" fact="Test" categories={['testCategory']} />);
        expect(component.getElements()).toMatchSnapshot();
    });
});
