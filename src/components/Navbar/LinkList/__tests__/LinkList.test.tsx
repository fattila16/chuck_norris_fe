import React from 'react';
import { shallow } from 'enzyme';
import LinkList from '../LinkList';

describe('[LinkList]', () => {
    it('Should render LinkList component without error', () => {
        const component = shallow(<LinkList links={[{ name: '/', href: '/' }]} />);
        expect(component.getElements()).toMatchSnapshot();
    });
});
